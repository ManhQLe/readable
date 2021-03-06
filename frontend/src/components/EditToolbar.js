import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon';
import Badge from 'material-ui/Badge';
import CommentIcon from 'material-ui/svg-icons/communication/comment'
import RaisedButton from 'material-ui/RaisedButton';
import { Alizarin, SunFlower, Emerald, Silver } from './colors'
import PropTypes from 'prop-types';
import DelConfirmation from './DelConfirmation'

const RaisedButtonStyle = {
    marginLeft: ".4em"
}

class EditToolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleConfirmation = (act) => {
        this.setState({ open: false })
        act === "OK" && this.props.onAction("DELETE");
    }

    render() {
        const {
            voteScore = 0,
            commentCount = 0,
            editing = false,
            onAction = () => { }
        } = this.props;

        return <ul className="grid">
            <DelConfirmation message="Are you sure to delete this post?" onAction={this.handleConfirmation} open={this.state.open} />
            <li>
                <IconButton tooltip="Up vote" onClick={() => onAction("THUMBSUP")} >
                    <FontIcon color={Emerald} className='material-icons'>thumb_up</FontIcon>
                </IconButton>
                <FontIcon>{voteScore}</FontIcon>
                <IconButton tooltip="Down vote" onClick={() => onAction("THUMBSDOWN")}>
                    <FontIcon color={Alizarin} className='material-icons'>thumb_down</FontIcon>
                </IconButton>
            </li>
            <li>
                <Badge badgeContent={commentCount} primary={true}>
                    <CommentIcon color={SunFlower} />
                </Badge>
                
            </li>
            <li style={{ justifyContent: "flex-end" }}>
                {
                    !editing && <RaisedButton
                        label="Edit"
                        onClick={() => onAction("EDIT")}
                        icon={<FontIcon color={Emerald}
                            className='material-icons'>edit</FontIcon>}
                    />
                }

                {
                    editing && <RaisedButton label="Save" onClick={() => onAction("SAVE")} labelColor={Emerald} />
                }
                {
                    editing && <RaisedButton label="Cancel" onClick={() => onAction("CANCEL")} labelColor={SunFlower} />
                }
                <RaisedButton disabled={editing}
                    style={RaisedButtonStyle}
                    onClick={() => this.setState({ open: true })}
                    label="Delete"
                    icon={<FontIcon style={{ color: (editing ? Silver : Alizarin) }} className='material-icons'>delete</FontIcon>}
                />
            </li>
        </ul>
    }


}

EditToolbar.propTypes = {
    voteScore: PropTypes.number,
    editing: PropTypes.bool,
    onAction: PropTypes.func,
    commentCount: PropTypes.number
}

export default EditToolbar;