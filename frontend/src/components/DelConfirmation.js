import React from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton'
import PropTypes from 'prop-types'

export default function DelComfirmation(props) {
    const {message,open,onAction} = props;

    const handleClose = (act)=>{
        onAction(act)
    }

    const actions = [
        <FlatButton
          label="Cancel"
          secondary={true}
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

DelComfirmation.propTypes = {
    message:PropTypes.string,
    open:PropTypes.bool.isRequired,
    onAction :PropTypes.func.isRequired
}