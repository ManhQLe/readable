import React from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton'

export default function DelComfirmation(props) {
    const {message,open,onAction} = props;

    const handleClose = (act)=>{
        onAction(act)
    }

    const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={()=>handleClose("CANCEL")}
        />,
        <FlatButton
          label="OK"
          primary={true}
          onClick={()=>handleClose("OK")}
        />,
      ];
    

    return (
        <Dialog
            actions={actions}
            modal={false}
            open={open}            
        >
            {message}
        </Dialog>
    )
}