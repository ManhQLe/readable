import React,{Component} from 'react'
import {connect}  from 'react-redux'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider'
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import PropTypes, { number } from 'prop-types'

class PostForm extends Component{

    constructor(props){
        super(props);
        this.state={
            title:"",
            content:"",    
            category:null      
        }
    }

    acted(type){        
        const {onAction}  = this.props;        
        onAction(type,type==='CREATE'?this.state:null);
    }

    componentDidMount(){
        const {categories} = this.props;
        let category;
        !categories.length && (category = categories[0].path)
        this.setState({category})
    }

    render(){
        const {categories} = this.props;
        const {title,content,category} = this.state;

        return <div>
            <TextField hintText="Type any " 
                floatingLabelText="Post Title" 
                fullWidth={true}
                defaultValue={title}
            />
            <br/>
            <TextField floatingLabelText="Post Content" fullWidth={true}
                multiple={true} 
                rows={2}
                rowsMax={4}
                defaultValue={content}/>
            <br/>
            <SelectField floatingLabelText="Category" 
                fullWidth={true}
                value={category}>
                {
                    categories.map(c=><MenuItem key={c.path} value={c.path} primaryText={c.name}/>)
                }
            </SelectField>
            <Divider/>
            
            <div style={{textAlign:"right"}}>            
                <FlatButton label="Create" onClick={()=>this.acted("CREATE")}/>
                <FlatButton label="Cancel" onClick={()=>this.acted("CANCEL")}/>
            </div>
        </div>
    }
}


function mapStateToProps(state){    
    return {
        categories:state.categories
    }
}

export default connect(mapStateToProps)(PostForm);