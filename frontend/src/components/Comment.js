import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Silver} from './colors'
import moment from 'moment'
import Divider from 'material-ui/Divider';
import CommentToolbar from './CommentToolbar'
class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false
        }
    }

    render() {
        const { comment } = this.props
        return (
            <div>
                <div>
                    <span>{comment.author}</span> wrote:
                    <br/>
                    <span style={{fontSize:".8em"}}>
                    On <span style={{color:Silver}}>{moment.unix(comment.timestamp).format("DD/MM/YYYY")}</span>
                    </span>
                </div>                
                <p>
                    {comment.body}
                </p>                
                <CommentToolbar comment={comment} />                
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        apiService: state.apiService
    }
}

export default connect(mapStateToProps)(Comment);