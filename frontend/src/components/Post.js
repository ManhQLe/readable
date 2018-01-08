import React, { Component } from 'react'
import moment from 'moment'
import Paper from 'material-ui/Paper';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton'
import Snackbar from 'material-ui/Snackbar';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router-dom'

import AppSettings from '../AppSettings'
import { connect } from 'react-redux'
import EditToolbar from './EditToolbar'
import { mergePosts } from '../actions'
import PropTypes from 'prop-types'


import {Clouds, Alizarin,Carrot, SunFlower,Abestos, Emerald, PeterRiver, Turquoise } from './colors'

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

const cantLoadMedia=(e)=>{
    e.target.style.display='none'
}

function PostOrigin(props) {
    const { post } = props;
    return <div>
        <span style={{ color: SunFlower }}>{moment.unix(post.timestamp).format("dddd, MMMM Do YYYY")}</span> by <span style={{ color: Emerald }}>{post.author}</span>
    </div>
}

function htmlizedBody(body){
    return body.replace(/\n/g,"<br/>")
}

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            commMessage: ""
        }
        this.modContent= null,
        this.modTitle = null;
    }

    communicateMessage=(m)=>{
        this.setState({commMessage:m})
    }

    onBodyChanged=(e)=>{
        this.modContent = e.target.value;
    }

    onTitleChanged=(e)=>{
        this.modTitle = e.target.value;
    }

    toggleEdit = () => {
        this.setState(prev => {
            return { editing: !prev.editing }
        })
    }
    toolbarActed=(act)=>{
        const {dispatch, apiService,post} = this.props;
        switch(act){
            case "EDIT":
            case "CANCEL":
                this.toggleEdit();
                break;
            case "SAVE":            
                const modContent = this.modContent;
                const modTitle = this.modTitle;


                (modTitle || modContent) && 
                apiService.editPost(post.id,modTitle || post.title,modContent || post.body,)
                .then(c=>{                    
                    this.communicateMessage("Saved")    
                    this.toggleEdit();
                    dispatch(mergePosts([c]))
                })
                .catch((e)=>{
                    this.communicateMessage(e);
                })                
                break;
            case "THUMBSUP":
            case "THUMBSDOWN":            
                apiService.votePost(post.id,act==="THUMBSUP")
                .then(p=>{
                    dispatch(mergePosts([p]));
                })            
                break;  
            case "DELETE":
                apiService.delPost(post.id)
                .then(p=>{                                        
                    dispatch(mergePosts([p],false))
                })   
                break;                       
        }
    }
    snackbarClosed = ()=>{
        this.communicateMessage("");
    }



    render() {
        const { post } = this.props;        
        const { editing,commMessage } = this.state;
        const open = commMessage.length>0;

        let contentBlock;let titleBlock
        if (editing) {
            titleBlock = <TextField 
                id={post.id+'Title'}
                fullWidth={true}
                defaultValue={post.title} 
                underlineStyle={{borderColor:Clouds}}
                underlineFocusStyle={{borderColor:SunFlower}}
                onChange={this.onTitleChanged}
                inputStyle={{color:Clouds}}/>
            contentBlock =<CardText><TextField id={post.id+'Body'} multiLine={true}
                rows={5}
                rowsMax = {8}
                underlineStyle={{borderColor:Clouds}}
                underlineFocusStyle={{borderColor:Carrot}}
                fullWidth={true}
                defaultValue={post.body}
                onChange={this.onBodyChanged}
                ref={i=>i&&i.focus()}
            /></CardText>
        }
        else{
            titleBlock= <Link className="post" to={`/${post.category}/${post.id}`}>{post.title}</Link>
            contentBlock = <CardText dangerouslySetInnerHTML={{__html:htmlizedBody(post.body)}}></CardText>
        }

        return <div>
        <Card>       
        <CardHeader title={post.author}
                subtitle={<span style={{ color: Abestos }}>{moment.unix(post.timestamp).format("dddd, MMMM Do YYYY")}</span>}
                avatar={AppSettings.getUrl()+"/public/avatar/annonymous.png"}
                /> 
            <CardMedia>
                {post.mediaType === 'video' &&
                    <video width="100%" autoPlay="autoplay" loop="loop" onerror="this.style.display='none'" >
                        <source src={post.mediaUrl} />
                    </video>
                }
                {
                    post.mediaType === 'image' &&
                    <img width="100%" src={post.mediaUrl} onError={cantLoadMedia} />
                }
            </CardMedia>
            <CardTitle title={titleBlock}/>
            {contentBlock}

            <CardActions>
                <EditToolbar voteScore={post.voteScore} onAction={this.toolbarActed} editing={editing}/>
            </CardActions>
        </Card>
        <Snackbar open={open} message={commMessage}
                autoHideDuration={3000}
                onRequestClose={this.snackbarClosed}/>
        </div>
    }
}


Post.propTypes={
    post:PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        apiService: state.apiService
    }
}

export default connect(mapStateToProps)(Post);