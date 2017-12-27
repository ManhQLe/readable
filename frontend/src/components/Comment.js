import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Silver,Carrot, BelizeHole,Clouds } from './colors'
import TextField from 'material-ui/TextField';
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

    toggleEdit = () => {
        this.setState(prev => {
            return { editing: !prev.editing }
        })
    }

    acted=(type)=> {
        switch (type) {
            case "EDIT":
            case "CANCEL":
                this.toggleEdit();
                break;
        }
    }



    render() {
        const { comment } = this.props
        const { editing } = this.state;

        let body;
        body = editing?<TextField id={comment.id+'Body'} multiLine={true}
        rows={5}
        rowsMax = {8}
        underlineStyle={{borderColor:BelizeHole}}
        underlineFocusStyle={{borderColor:Carrot}}
        fullWidth={true}
        defaultValue={comment.body}
        ref={i=>i&&i.focus()}
    />
        : <p>{comment.body}</p>

        return (
            <div>
                <div>
                    <span style={{ color: BelizeHole }}>{comment.author}</span> wrote:
                    <br />
                    <span style={{ fontSize: ".8em" }}>
                        On <span style={{ color: Silver }}>{moment.unix(comment.timestamp).format("DD/MM/YYYY")}</span>
                    </span>
                </div>
                { body}
                <CommentToolbar comment={comment} onAction={this.acted} editing={editing} />
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