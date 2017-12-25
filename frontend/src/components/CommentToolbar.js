import React,{Component} from 'react'
import { Pumpkin, Carrot, SunFlower, Abestos ,Silver } from './colors'
import IconButton from 'material-ui/IconButton'
import Thumbsup from 'material-ui/svg-icons/action/thumb-up'
import Thumbsdown from 'material-ui/svg-icons/action/thumb-down'
import FlatButton from 'material-ui/FlatButton';


const styles={
    smallIcon: {
        width: 17,
        height: 17,
      },
    iconHoverColor:"red"
}

export default function CommentToobar (props){
    const {comment,onAction} = props
    const {voteScore} = comment;

    function handleAction(type){
        onAction(type)
    }

    return (
        <ul className="grid">
        <li>
            <IconButton iconStyle={styles.smallIcon} tooltip="Up vote" onClick={()=>handleAction("THUMBSUP")} >
                <Thumbsup color={Abestos} hoverColor={SunFlower}/>
            </IconButton>
            <span>{voteScore}</span>
            <IconButton iconStyle={styles.smallIcon} tooltip="Down vote" onClick={()=>handleAction("THUMBSDOWN")}>
                <Thumbsdown color={Abestos} hoverColor={SunFlower}/>
            </IconButton>
        </li>
        </ul>
    )
}