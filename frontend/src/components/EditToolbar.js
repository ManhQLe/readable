import React, { Component } from 'react'
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import { Alizarin, Carrot, SunFlower, Emerald,Silver } from './colors'
import PropTypes from 'prop-types';

const RaisedButtonStyle={
    marginLeft:".4em"
}

function EditToolbar(props) {
    const {
        voteScore = 0,
        editing = false,
        onAction = () => { } 
    } = props;
    

    const handleAction = (actionType) => {
        onAction(actionType);
    }

    return <ul className="grid">
        <li>
            <IconButton tooltip="Up vote" onClick={()=>this.handleAction("THUMBSUP")} >
                <FontIcon color={Emerald} className='material-icons'>thumb_up</FontIcon>
            </IconButton>
            <FontIcon>{voteScore}</FontIcon>
            <IconButton tooltip="Down vote" onClick={()=>this.handleAction("THUMBSDOWN")}>
                <FontIcon color={Alizarin} className='material-icons'>thumb_down</FontIcon>
            </IconButton>
        </li>
        <li style={{ justifyContent: "flex-end" }}>
            {
                !editing && <RaisedButton 
                            label="Edit" 
                            onClick={() => handleAction("EDIT")} 
                            icon={<FontIcon color={Emerald} 
                            className='material-icons'>edit</FontIcon>} 
                />
            }

            {
                editing && <RaisedButton label="Save" onClick={() => handleAction("SAVE")} labelColor={Emerald}/>
            }
            {
                editing && <RaisedButton label="Cancel" onClick={() => handleAction("CANCEL")} labelColor={SunFlower}/>
            }

            <RaisedButton disabled={editing} 
                style={RaisedButtonStyle}
                onClick={()=>handleAction("DELETE")} 
                label="Delete" 
                icon={<FontIcon style={{color:(editing?Silver:Alizarin)}} className='material-icons'>delete</FontIcon>} 
            />            
        </li>
    </ul>
}

EditToolbar.propTypes = {
    voteScore: PropTypes.number,
    editing: PropTypes.bool,
    onAction: PropTypes.func
}

export default EditToolbar;