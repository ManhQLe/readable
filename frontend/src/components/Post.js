import React, { Component } from 'react'
import Paper from 'material-ui/Paper';
import Badge from 'material-ui/Badge';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon';
import { blue300, red300, green400, yellow400, orange300, blue400 } from 'material-ui/styles/colors';
import { connect } from 'react-redux'

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Editting: false
        }
    }

    render() {
        const { post } = this.props;
        return <Paper>
            <h1>{post.title}</h1>
            <p>
                {post.body}
            </p>
            <Toolbar style={{backgroundColor:"white"}}>
                <ToolbarGroup>
                    <ToolbarTitle text={`Vote Score:${post.voteScore}`} />
                    <IconButton tooltip="Up vote">
                        <FontIcon color={green400} className='material-icons'>thumb_up</FontIcon>
                    </IconButton>
                    <IconButton tooltip="Down vote">
                        <FontIcon color={red300} className='material-icons'>thumb_down</FontIcon>
                    </IconButton>
                </ToolbarGroup>
                <ToolbarGroup>
                    <IconButton tooltip="Edit">
                        <FontIcon className='material-icons' color={blue300}>edit</FontIcon>
                    </IconButton>
                    <IconButton tooltip="Delete">
                        <FontIcon className='material-icons' color={red300}>delete</FontIcon>
                    </IconButton>
                </ToolbarGroup>
            </Toolbar>
        </Paper>
    }
}
function mapStateToProps(state) {
    return {
        apiService: state.apiService
    }
}

export default connect(mapStateToProps)(Post);