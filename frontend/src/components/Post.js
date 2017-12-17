import React, { Component } from 'react'
import moment from 'moment'
import Paper from 'material-ui/Paper';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux'

import {Clouds, Alizarin,Carrot, SunFlower, Emerald, PeterRiver, Turquoise } from './colors'

import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

function PostOrigin(props) {
    const { post } = props;
    return <div>
        <span style={{ color: SunFlower }}>{moment.unix(post.timestamp).format("dddd, MMMM Do YYYY")}</span> by <span style={{ color: Emerald }}>{post.author}</span>
    </div>
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

    editClicked = () => {
        console.log("Clicked")
        this.toggleEdit();
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
            titleBlock= post.title;
            contentBlock = <CardText>
                {post.body}
            </CardText>
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
                <ul className="grid">
                    <li>
                        <IconButton tooltip="Up vote">
                            <FontIcon color={Emerald} className='material-icons'>thumb_up</FontIcon>
                        </IconButton>
                        <FontIcon>{post.voteScore}</FontIcon>
                        <IconButton tooltip="Down vote">
                            <FontIcon color={Alizarin} className='material-icons'>thumb_down</FontIcon>
                        </IconButton>
                    </li>
                    <li style={{ justifyContent: "flex-end" }}>
                        {!editing && <RaisedButton label="Edit" onClick={this.editClicked} icon={<FontIcon color={PeterRiver} className='material-icons'>edit</FontIcon>} />}
                        <RaisedButton disabled={editing} label="Delete" icon={<FontIcon color={Alizarin} className='material-icons'>delete</FontIcon>} />
                    </li>
                </ul>
            </CardActions>
        </Card>
    }
}
function mapStateToProps(state) {
    return {
        apiService: state.apiService
    }
}

export default connect(mapStateToProps)(Post);