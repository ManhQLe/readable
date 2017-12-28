import React, { Component } from 'react'
import { connect } from 'react-redux'
import {mergeComments} from '../actions'
import { Silver,Carrot, BelizeHole,Clouds } from './colors'
import Snackbar from 'material-ui/Snackbar';
import TextField from 'material-ui/TextField';
import moment from 'moment'
import Divider from 'material-ui/Divider';
import CommentToolbar from './CommentToolbar'
class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            commMessage: "",
        }
        this.edited = false;
        this.modContent = null;
    }

    toggleEdit = () => {
        this.setState(prev => {
            return { editing: !prev.editing }
        })
    }

    acted=(act)=> {
        const {apiService,comment,dispatch} = this.props;
        switch (act) {
            case "EDIT":
            case "CANCEL":
                this.toggleEdit();
                break;
            case "SAVE":      
                //this.props.comment.body = this.modContent;    
               
                const modContent = this.modContent;

                modContent && apiService.editComment(comment.id,modContent)
                .then(c=>{                    
                    this.communicateMessage("Saved")    
                    this.toggleEdit();
                    dispatch(mergeComments([c]))
                })
                .catch((e)=>{
                    this.communicateMessage(e);
                })
            case "THUMBSUP":
            case "THUMBSDOWN":
                apiService.voteComment(comment.id,act==="THUMBSUP")
                .then(c=>{
                    dispatch(mergeComments([c]));
                })            
                break;            
                
        }
    }
    communicateMessage=(m)=>{
        this.setState({commMessage:m})
    }

    onBodyChanged=(e)=>{
        this.modContent = e.target.value;
    }

    snackbarClosed = ()=>{
        this.communicateMessage("");
    }

    render() {
        const { comment } = this.props
        const { editing,commMessage } = this.state;
        const open = commMessage.length>0;
        const content =this.modContent || comment.body;
        let body;        
        body = editing?<TextField id={comment.id+'Body'} multiLine={true}
        rows={5}
        rowsMax = {8}
        underlineStyle={{borderColor:BelizeHole}}
        underlineFocusStyle={{borderColor:Carrot}}
        fullWidth={true}
        defaultValue={content}
        onChange={this.onBodyChanged}
        ref={i=>{
            this.input = i;
            i&&i.focus()
        }}
    />
        : <p dangerouslySetInnerHTML={{__html:content.replace(/\n/g,"<br/>")}}></p>

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
                <Snackbar open={open}
                message={commMessage}
                autoHideDuration={3000}
                onRequestClose={this.snackbarClosed}
                />
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