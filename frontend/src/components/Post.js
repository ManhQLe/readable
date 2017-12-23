import React, { Component } from 'react'
import moment from 'moment'
import Paper from 'material-ui/Paper';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import EditToolbar from './EditToolbar'
import { mergePosts } from '../actions'
import PropTypes from 'prop-types'


import {Clouds, Alizarin,Carrot, SunFlower, Emerald, PeterRiver, Turquoise } from './colors'

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

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
            editing: false
        }
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
                break;
            case "THUMBSUP":
                apiService.votePost(post.id,true)
                .then(p=>{
                    dispatch(mergePosts({posts:[p]}));
                })            
                break;
            case "THUMBSDOWN":
                apiService.votePost(post.id,false)
                .then(p=>{
                    dispatch(mergePosts({posts:[p]}));
                })  
                break;            
        }
    }

    render() {
        const { post } = this.props;
        const { editing } = this.state;

        let contentBlock;let titleBlock
        if (editing) {
            titleBlock = <TextField 
                id={post.id+'Title'}
                fullWidth={true}
                defaultValue={post.title} 
                underlineStyle={{borderColor:Clouds}}
                underlineFocusStyle={{borderColor:SunFlower}}
                inputStyle={{color:Clouds}}/>
            contentBlock =<CardText> <TextField id={post.id+'Body'} multiLine={true}
                rows={5}
                rowsMax = {8}
                underlineStyle={{borderColor:Clouds}}
                underlineFocusStyle={{borderColor:Carrot}}
                fullWidth={true}
                defaultValue={post.body}
            /></CardText>
        }
        else{
            titleBlock= <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
            contentBlock = <CardText dangerouslySetInnerHTML={{__html:htmlizedBody(post.body)}}></CardText>
        }

        return <Card>            
            <CardMedia overlay={<CardTitle title={titleBlock} subtitle={<PostOrigin post={post} />} />}>
                {post.mediaType === 'video' &&
                    <video width="100%" autoPlay="autoplay" loop="loop">
                        <source src={post.mediaUrl} />
                    </video>
                }
                {
                    post.mediaType === 'image' &&
                    <img width="100%" src={post.mediaUrl} />
                }
            </CardMedia>

            {contentBlock}

            <CardActions>
                <EditToolbar voteScore={post.voteScore} onAction={this.toolbarActed} editing={editing}/>
            </CardActions>
        </Card>
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