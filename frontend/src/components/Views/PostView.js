import React,{Component} from 'react'
import {connect} from 'react-redux'
import Post from '../Post'
const UrlPattern = require('url-pattern');

class PostView extends Component{
    render(){
        const pat = new UrlPattern("/:category/:postId");
        const keys = pat.match(window.location.pathname)            
        

        return <div>
            
        </div>
    }
}

function mapStateToProps(state) {
    return {        
        posts: state.posts,
        categories: state.categories,
        apiService: state.apiService
    }
}


export default connect(mapStateToProps)(PostView);