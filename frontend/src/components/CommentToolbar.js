import React,{Component} from 'react'
import { Pumpkin,Emerald, Carrot, Alizarin, Abestos ,Silver } from './colors'
import IconButton from 'material-ui/IconButton'
import Thumbsup from 'material-ui/svg-icons/action/thumb-up'
import Thumbsdown from 'material-ui/svg-icons/action/thumb-down'
import Cancel from 'material-ui/svg-icons/navigation/cancel'
import Save from 'material-ui/svg-icons/content/save'
import Edit from 'material-ui/svg-icons/image/edit'
import FlatButton from 'material-ui/FlatButton';


const styles={
    smallIcon: {
        width: 17,
        height: 17,
      },
    iconHoverColor:"red"
}

export default function CommentToobar (props){
    const {comment,onAction,editing} = props
    const {voteScore} = comment;

    function handleAction(type){
        onAction(type)
    }
    return (

        <ul className="grid">
        <li>
            <IconButton iconStyle={styles.smallIcon} tooltip="Up vote" onClick={()=>handleAction("THUMBSUP")} >
                <Thumbsup color={Abestos} hoverColor={Emerald}/>
            </IconButton>
            <span>{voteScore}</span>
            <IconButton iconStyle={styles.smallIcon} tooltip="Down vote" onClick={()=>handleAction("THUMBSDOWN")}>
                <Thumbsdown color={Abestos} hoverColor={Emerald}/>
            </IconButton>
        </li>
        <li style={{ justifyContent: "flex-end" }}>
            {
                !editing && <IconButton 
                iconStyle={styles.smallIcon}
                label="Edit" 
                onClick={() => handleAction("EDIT")}>
                    <Edit />
                </IconButton>
            }
            {
                editing && <IconButton 
                    label="Save" 
                    onClick={() => handleAction("SAVE")}
                    iconStyle={styles.smallIcon}
                >
                    <Save/>
                </IconButton>
            }
            {
                editing && <IconButton 
                    iconStyle={styles.smallIcon}                
                    label="Cancel" 
                    onClick={() => handleAction("CANCEL")}>
                    <Cancel color={Alizarin}/>
                </IconButton>
            }

            <FlatButton disabled={editing} 
                onClick={()=>handleAction("DELETE")} 
                label="Delete" labelStyle={{color:Pumpkin}}
            />         
            
        </li>
        </ul>
    )
}