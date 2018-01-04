import React from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton'
import PostForm from './PostForm'
export default function PostDialog(props) {
    const {open,onAction} = props;
    return (
        <Dialog
            modal={false}
            open={open}
        >
           <PostForm onAction={onAction}/>
        </Dialog>
    )
}