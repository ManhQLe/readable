import React,{Component} from 'react'
import {connect} from 'react-redux'
import Post from '../Post'
import {Alizarin} from '../colors'
import Category from '../Category';

const UrlPattern = require('url-pattern');

class CategoryView extends Component{
    render(){
        const {categories,posts}  = this.props;
        const pat = new UrlPattern("/:category");
        const keys = pat.match(window.location.pathname)            
        const cat = categories.find(c=>c.path === keys.category);
        let renderBlock
        {
            renderBlock = cat? <Category category={cat}/>
            :
            <div></div>
        }
       
        return renderBlock;
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories,
        apiService: state.apiService
    }
}


export default connect(mapStateToProps)(CategoryView);