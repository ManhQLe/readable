import React from 'react'
import Dialog from 'material-ui/Dialog';

export default function DelComfirmation(props) {
    const {message,open,onAction}

    handleClose=(act)=>{
        onAction(act)
    }

    const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={()=>this.handleClose("CANCEL")}
        />,
        <FlatButton
          label="OK"
          primary={true}
          onClick={()=>this.handleClose("OK")}
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