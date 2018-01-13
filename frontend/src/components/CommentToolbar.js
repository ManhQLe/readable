import React, { Component } from 'react'
import { Pumpkin, Emerald, Alizarin, Abestos } from './colors'
import IconButton from 'material-ui/IconButton'
import Thumbsup from 'material-ui/svg-icons/action/thumb-up'
import Thumbsdown from 'material-ui/svg-icons/action/thumb-down'
import Cancel from 'material-ui/svg-icons/navigation/cancel'
import Save from 'material-ui/svg-icons/content/save'
import Edit from 'material-ui/svg-icons/image/edit'
import FlatButton from 'material-ui/FlatButton';
import DelConfirmation from './DelConfirmation'

const styles = {
    smallIcon: {
        width: 17,
        height: 17,
    }    
}

export default class CommentToobar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false
        }        
    }

    handleConfimationAction=(act)=> {
        this.setState({open:false});
        act==="OK" && this.props.onAction("DELETE");
    }

    render() {
        const { comment, onAction, editing } = this.props
        const { open } = this.state;
        const { voteScore } = comment;

        return (
            <div>
                <DelConfirmation open={open} message="Are you sure to delete this comment?" onAction={this.handleConfimationAction} />
                <ul className="grid">
                    <li>
                        <IconButton iconStyle={styles.smallIcon} tooltip="Up vote" onClick={() => onAction("THUMBSUP")} >
                            <Thumbsup color={Abestos} hoverColor={Emerald} />
                        </IconButton>
                        <span>{voteScore}</span>
                        <IconButton iconStyle={styles.smallIcon} tooltip="Down vote" onClick={() => onAction("THUMBSDOWN")}>
                            <Thumbsdown color={Abestos} hoverColor={Emerald} />
                        </IconButton>
                    </li>
                    <li style={{ justifyContent: "flex-end" }}>
                        {
                            !editing && <IconButton
                                iconStyle={styles.smallIcon}
                                label="Edit"
                                onClick={() => onAction("EDIT")}>
                                <Edit />
                            </IconButton>
                        }
                        {
                            editing && <IconButton
                                label="Save"
                                onClick={() => onAction("SAVE")}
                                iconStyle={styles.smallIcon}
                            >
                                <Save />
                            </IconButton>
                        }
                        {
                            editing && <IconButton
                                iconStyle={styles.smallIcon}
                                label="Cancel"
                                onClick={() => onAction("CANCEL")}>
                                <Cancel color={Alizarin} />
                            </IconButton>
                        }

                        <FlatButton disabled={editing}
                            onClick={() => this.setState({ open: true })}
                            label="Delete" labelStyle={{ color: Pumpkin, disabledColor: "white" }}
                        />

                    </li>
                </ul>
            </div>
        )
    }
}