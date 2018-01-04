import React, { Component } from 'react'
import {BelizeHole,Carrot, Turquoise, Silver} from './colors'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton'
import Photo from 'material-ui/svg-icons/image/photo'
import Video from 'material-ui/svg-icons/maps/local-movies'

export default class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.state={
            title:"",
            body:"",
            category:"",
            mediaUrl:"",
            mediaType:"image"
        }        
    }

  
    titleChanged = (e)=>{
        this.setState({title:e.target.value});
    }

    contentChanged = (e)=>{
        this.setState({body:e.target.value})
    }

    mediaUrlChanged = (e)=>{
        this.setState({mediaUrl:e.target.value})
    }

    mediaTypeChanged = (e,key,v)=>{
        this.setState({mediaType:v})
    }

    categoryChanged = (e,key,v)=>{        
        this.setState({category:v})
    }
    
    onButtonClicked = (act)=>{    
        const {onAction=()=>{}} = this.props;

        onAction(act,act==="SUBMIT"?this.state:null)
    }

    componentWillMount(){
        const {category} = this.state;
        const {categories=[],defCat} = this.props;
        let x = categories.find(c=>(c.path===category || c.path===defCat));
        !x && categories.length && (x= categories[0]);
        !category.length && x && this.setState({category:x.path})
    }
    render() {
        const {title,body,category,mediaType,mediaUrl} = this.state;

        const {categories=[],defCat} = this.props;
        let x = categories.find(c=>(c.path===category || c.path===defCat));
        !x && categories.length && (x= categories[0]);

        
        const allowSubmit = body.length && title.length && category.length

        return <div>
            <TextField id='title' underlineStyle={{borderColor:BelizeHole}}
            underlineFocusStyle={{borderColor:Carrot}}
            fullWidth={true}
            hintText="Type post title here"
            floatingLabelText="Post Title"
            value={title}
            onChange={this.onInteraction}
            />
            <br/>
            <TextField id='body' multiLine={true}
            hintText="Give it some body :)"
            floatingLabelText="Post Content"
            rows={5}
            rowsMax = {8}
            underlineStyle={{borderColor:BelizeHole}}
            underlineFocusStyle={{borderColor:Carrot}}
            multiLine={true}
            fullWidth={true}
            value = {body}
            onChange={this.contentChanged}
            />
            <br/>
            <SelectField 
                floatingLabelText="Category"
                fullWidth={true}
                value={x?x.path:null}
                onChange={this.categoryChanged}>
                {
                    categories.map(c=><MenuItem key={c.path} value={c.path} primaryText={c.name}/>)
                }
            </SelectField>
            <br/>
            <TextField id='mediaUrl' multiLine={true}
            hintText="Link to image for your post"
            floatingLabelText="Media URL"           
            underlineStyle={{borderColor:BelizeHole}}
            underlineFocusStyle={{borderColor:Carrot}}
            fullWidth={true}
            value = {mediaUrl}
            onChange={this.mediaUrlChanged}            
            />
            <br/>            
            <SelectField
                floatingLabelText="Media Type"
                fullWidth={true}
                value={mediaType}
                onChange={this.mediaTypeChanged}>
                <MenuItem key="image" value="image" primaryText="Image" leftIcon={<Photo/>}/>
                <MenuItem key="video" value="video" primaryText="Video" leftIcon={<Video/>}/>
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