import React,{Component} from 'react'
import { Pumpkin,Emerald, Carrot, Alizarin, Abestos ,Silver } from './colors'
import IconButton from 'material-ui/IconButton'
import Thumbsup from 'material-ui/svg-icons/action/thumb-up'
import Thumbsdown from 'material-ui/svg-icons/action/thumb-down'
import Cancel from 'material-ui/svg-icons/navigation/cancel'
import Save from 'material-ui/svg-icons/content/save'
import Edit from 'material-ui/svg-icons/image/edit'
import FlatButton from 'material-ui/FlatButton';
import DelConfirmation from './DelConfirmation'

const styles={
    smallIcon: {
        width: 17,
        height: 17,
      },
    iconHoverColor:"red"
}

export default class CommentToobar extends Component{

    constructor(props){
        super(props)
        this.state = {
            open: false
        }
    }

    handleAction(type){
        this.props.onAction(type)
    }

    render(){
        const {comment,editing} = this.props
        const {voteScore} = comment;
        return (

            <ul className="grid">
            <li>
                <IconButton iconStyle={styles.smallIcon} tooltip="Up vote" onClick={()=>this.handleAction("THUMBSUP")} >
                    <Thumbsup color={Abestos} hoverColor={Emerald}/>
                </IconButton>
                <span>{voteScore}</span>
                <IconButton iconStyle={styles.smallIcon} tooltip="Down vote" onClick={()=>this.handleAction("THUMBSDOWN")}>
                    <Thumbsdown color={Abestos} hoverColor={Emerald}/>
                </IconButton>
            </li>
            <li style={{ justifyContent: "flex-end" }}>
                {
                    !editing && <IconButton 
                    iconStyle={styles.smallIcon}
                    label="Edit" 
                    onClick={() => this.handleAction("EDIT")}>
                        <Edit />
                    </IconButton>
                }
                {
                    editing && <IconButton 
                        label="Save" 
                        onClick={() => this.handleAction("SAVE")}
                        iconStyle={styles.smallIcon}
                    >
                        <Save/>
                    </IconButton>
                }
                {
                    editing && <IconButton 
                        iconStyle={styles.smallIcon}                
                        label="Cancel" 
                        onClick={() => this.handleAction("CANCEL")}>
                        <Cancel color={Alizarin}/>
                    </IconButton>
                }
    
                <FlatButton disabled={editing} 
                    onClick={()=>this.handleAction("DELETE")} 
                    label="Delete" labelStyle={{color:Pumpkin, disabledColor:"white"}}
                />         
                
            </li>
            </ul>
        )
    }

   
}