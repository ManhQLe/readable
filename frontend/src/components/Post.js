import React, { Component } from 'react'
import Paper from 'material-ui/Paper';
import Badge from 'material-ui/Badge';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon';
import { blue300, red300, green400, yellow400, orange300, blue400 } from 'material-ui/styles/colors';
import { connect } from 'react-redux'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';


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

        const postOrigin = <div>By <span>{post.author}</span> on <span>{post.timestamp}</span></div>

        let contentBlock;
        if (editing) {
            contentBlock = <div>
                <input value={this.title} defaultValue={this.title} />
                {postOrigin}
                <textarea />
            </div>
        }
        else
            contentBlock = <Card>
                <CardHeader
                    title={post.author}
                    subtitle=""
                />
                <CardMedia>
                    <video width="100%"
                    poster="https://d125fmws0bore1.cloudfront.net/assets/shared/video/video-bg-nd201-5a4a4886ed1bdbdd10f4278f4844eeda7e54f55a5d828d3b0160e36cab7ff7af.jpg" 
                    autoplay="autoplay" loop="loop" class="video--responsive">
                        <source src="https://d125fmws0bore1.cloudfront.net/videos/video-bg-nd201.mp4"/>
                        <source src="https://d125fmws0bore1.cloudfront.net/videos/video-bg-nd201.ogv"/>
                        <source src="https://d125fmws0bore1.cloudfront.net/videos/video-bg-nd201.webm"/>
                    </video>                
                </CardMedia>
                <CardTitle title={post.title} />
                            <CardText>
                                {post.body}
                            </CardText>
                            <CardActions>
                                <IconButton tooltip="Up vote">
                                    <FontIcon color={green400} className='material-icons'>thumb_up</FontIcon>
                                </IconButton>
                                <span>{post.voteScore}</span>
                                <IconButton tooltip="Down vote">
                                    <FontIcon color={red300} className='material-icons'>thumb_down</FontIcon>
                                </IconButton>
                                <IconButton tooltip="Edit">
                                    <FontIcon className='material-icons' color={blue300}>edit</FontIcon>
                                </IconButton>
                                <IconButton tooltip="Delete">
                                    <FontIcon className='material-icons' color={red300}>delete</FontIcon>
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