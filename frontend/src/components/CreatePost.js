import React, { Component } from 'react'
import {BelizeHole,Carrot, Turquoise, Silver} from './colors'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton'

export default class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.state={
            title:"",
            body:"",
            category:""
        }        
    }

    titleChanged = (e)=>{
        this.setState({title:e.target.value});
    }

    contentChanged = (e)=>{
        this.setState({body:e.target.value})
    }

    categoryChanged = (e,key,v)=>{        
        this.setState({category:v})
    }
    
    onButtonClicked = (act)=>{    
        const {onAction=()=>{}} = this.props;

        onAction(act,act==="SUBMIT"?this.state:null)
    }

    render() {
        const {title,body,category} = this.state;
        const {categories=[],defCat} = this.props;
        let x = categories.find(c=>(c.path===category || c.path===defCat));
        !x && categories.length && (x= categories[0]);

        !category.length && x && this.setState({category:x.path})
        const allowSubmit = body.length && title.length && category.length

        return <div>
            <TextField id='title' underlineStyle={{borderColor:BelizeHole}}
            underlineFocusStyle={{borderColor:Carrot}}
            fullWidth={true}
            hintText="Type post title here"
            floatingLabelText="Post Title"
            value={title}
            onChange={this.titleChanged}
            />
            <br/>
            <TextField id='body' multiLine={true}
            hintText="Give it some body :)"
            floatingLabelText="Post Content"
            rows={5}
            rowsMax = {8}
            underlineStyle={{borderColor:BelizeHole}}
            underlineFocusStyle={{borderColor:Carrot}}
            fullWidth={true}
            value = {body}
            onChange={this.contentChanged}
            />
            <br/>
            <SelectField 
                floatingLabelText="Category"
                fullWidth={true}
                ref="X"
                value={x?x.path:null}
                onChange={this.categoryChanged}>
                {
                    categories.map(c=><MenuItem key={c.path} value={c.path} primaryText={c.name}/>)
                }
            </SelectField>
            <div style={{textAlign:"right"}}>
                <FlatButton disabled={!allowSubmit}
                            onClick={this.onButtonClicked}
                            label="Submit" labelStyle={{ color: allowSubmit?Turquoise:Silver}}
                />
                <FlatButton onClick={this.onButtonClicked} label="Close" labelStyle={{ color: Carrot}}/>
            </div>
        </div>
    }
}