import React,{Component} from 'react'
import {connect} from 'react-redux'
import {mergePosts,mergeAll} from '../../actions'
import Post from '../Post'
const UrlPattern = require('url-pattern');

class PostView extends Component{
    componentDidMount(){
        const pat = new UrlPattern("/:category/:postId");
        const keys = pat.match(window.location.pathname);
        const {posts,apiService,dispatch} = this.props;
        const post = posts.find(p=>p.id===keys.id && p.category === keys.category);
        
        Promise.all([post|| apiService.getPost(keys.postId)])
        .then(posts=>{
            posts = posts.filter(p=>p.category===keys.category)
            
            posts.length &&
            Promise.all([posts,apiService.getComments(keys.postId)])
            .then((posts,comments)=>{
                dispatch(mergeAll({posts,comments}))
            })
            

        })

    }

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
        comments:state.comments,
        apiService: state.apiService
    }
}


export default connect(mapStateToProps)(PostView);