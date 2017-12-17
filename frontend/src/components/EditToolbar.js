import React, { Component } from 'react'
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import { Alizarin, Carrot, SunFlower, Emerald } from './colors'

export default function EditToolbar(props) {
    const {
        voteScore = 0,
        editing = false,
        onAction = () => { } 
    } = props;

    const buttonClick = (actionType) => {
        onAction(actionType);
    }

    return <ul className="grid">
        <li>
            <IconButton tooltip="Up vote">
                <FontIcon color={Emerald} className='material-icons'>thumb_up</FontIcon>
            </IconButton>
            <FontIcon>{voteScore}</FontIcon>
            <IconButton tooltip="Down vote">
                <FontIcon color={Alizarin} className='material-icons'>thumb_down</FontIcon>
            </IconButton>
        </li>
        <li style={{ justifyContent: "flex-end" }}>
            {!editing && <RaisedButton label="Edit" onClick={() => buttonClick("EDIT")} icon={<FontIcon color={Emerald} className='material-icons'>edit</FontIcon>} />}
            <RaisedButton disabled={editing} label="Delete" icon={<FontIcon color={Alizarin} className='material-icons'>delete</FontIcon>} />
        </li>
    </ul>
}