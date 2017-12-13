import React,{Component} from 'react'
import {connect} from 'react-redux'
import Post from '../Post'
const UrlPattern = require('url-pattern');

class CategoryView extends Component{
    render(){
        const {categories,posts}  = this.props;

        const pat = new UrlPattern("/:category");
        const keys = pat.match(window.location.pathname)            
        const cat = categories.find(c=>c.path === keys.category);
        let renderBlock
        if(cat) {
            const relatedPosts = posts.filter(p=>p.category === cat.path);
            renderBlock = <div>
            <h1>{cat.name}</h1>
            <div>
                {
                    relatedPosts.map(p=><Post key={p.id} post={p}/>)
                }
            </div>
        </div>
        }
        else
            renderBlock=<div></div>
       
        return renderBlock;
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories,
        posts: state.posts,
        apiService: state.apiService
    }
}


export default connect(mapStateToProps)(CategoryView);