import React, { Component } from 'react'
import moment from 'moment'
import Paper from 'material-ui/Paper';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon';
import { connect } from 'react-redux'

import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

function PostOrigin(props){
    const {post} = props;
    return <div>
        <span style={{color:"#f1c40f"}}>{moment.unix(post.timestamp).format("dddd, MMMM Do YYYY")}</span> by <span>{post.author}</span>
    </div>
}

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }

    render() {
        const { post } = this.props;
        const { editing } = this.state;        

        let contentBlock;
        if (editing) {
            contentBlock = <div>
                <input value={this.title} defaultValue={this.title} /> 
                <textarea />
            </div>
        }
        else
            contentBlock = <Card>                
                <CardMedia overlay={<CardTitle title={post.title} subtitle={<PostOrigin post={post}/>} />}>
                    {   post.mediaType ==='video' &&
                        <video width="100%" autoplay="autoplay" loop="loop">
                            <source src={post.mediaUrl} />
                        </video>
                    }
                    {
                        post.mediaType ==='image' &&
                        <img width="100%" src={post.mediaUrl}/>
                    }
                </CardMedia>

                <CardText>
                    {post.body}
                </CardText>
                <CardActions>
                    <IconButton tooltip="Up vote">
                        <FontIcon className='material-icons'>thumb_up</FontIcon>
                    </IconButton>
                    <span>{post.voteScore}</span>
                    <IconButton tooltip="Down vote">
                        <FontIcon className='material-icons'>thumb_down</FontIcon>
                    </IconButton>
                    <IconButton tooltip="Edit">
                        <FontIcon className='material-icons'>edit</FontIcon>
                    </IconButton>
                    <IconButton tooltip="Delete">
                        <FontIcon className='material-icons'>delete</FontIcon>
                    </IconButton>
                </CardActions>
            </Card>

        return contentBlock
    }
}
function mapStateToProps(state) {
    return {
        apiService: state.apiService
    }
}

export default connect(mapStateToProps)(Post);