import React, { Component } from 'react'
import {BelizeHole,Carrot, Turquoise, Silver} from './colors'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

export default class CreateComment extends Component{
    constructor(props){
        super(props);
        this.state = {
            body:""
        }
    }

    contentChanged=(e)=>{
        this.setState({body:e.target.value})
    }

    render(){
        const {body} = this.state;
        const {onPost} = this.props;
        return (
        <div>            
            <TextField id='body' multiLine={true}
            hintText="We love your feedback because we have room for improvement :)"
            floatingLabelText="Comments"
            rows={3}
            rowsMax = {5}
            underlineStyle={{borderColor:BelizeHole}}
            underlineFocusStyle={{borderColor:Carrot}}
            multiLine={true}
            fullWidth={true}
            value = {body}
            onChange={this.contentChanged}
            />
            <div style={{textAlign:"right"}}>
                <FlatButton disabled={body.length<=0} onClick={()=>{onPost(this.state.body), this.setState({body:''})}} label="Post" labelStyle={{ color:body.length>0? Carrot:Silver }} />
            </div>
        </div>
        )
    }
}


