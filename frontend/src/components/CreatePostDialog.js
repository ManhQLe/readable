import React from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton'

export default function PostDialog(props) {
    const {open,onAction} = props;
    return (
        <Dialog
            title="Create Post"
            modal={false}
            open={open}
            autoScrollBodyContent={true}
        >           
        </Dialog>
    )
}