import React, { Component } from 'react'
import {BelizeHole,Carrot, Turquoise} from './colors'
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.state={
            title:null,
            content:null,
            category:true
        }
    }

    titleChanged = (e)=>{
        this.setState({title:e.target.value});
    }

    contentChanged = (e)=>{
        this.setState({content:e.target.value})
    }

    categoryChanged = (v)=>{
        console.log(v)
    }

    render() {
        const {title,content,category} = this.state;
        const {categories=[]} = this.props;
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
            hintText="Give it some content :)"
            floatingLabelText="Post Content"
            rows={5}
            rowsMax = {8}
            underlineStyle={{borderColor:BelizeHole}}
            underlineFocusStyle={{borderColor:Carrot}}
            fullWidth={true}
            value = {content}
            onChange={this.contentChanged}

            />
            <br/>
            <DropDownMenu 
                fullWidth={true}
                value={category}
                onChange={this.categoryChanged}>
                <MenuItem value={1} primaryText="Never" />
                <MenuItem value={2} primaryText="Every Night" />
                <MenuItem value={3} primaryText="Weeknights" />
                <MenuItem value={4} primaryText="Weekends" />
                <MenuItem value={5} primaryText="Weekly" />
            </DropDownMenu>
            <div>

            </div>
        </div>
    }
}