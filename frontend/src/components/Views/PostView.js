import React,{Component} from 'react'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress';
import {mergePosts,mergeAll} from '../../actions'
import Post from '../Post'
import Comment from '../Comment'

class PostView extends Component{
    
    render(){
        const {posts,comments,match} = this.props
        const {cateory,postId} = match.params;        
        const post = posts.find(p=>p.id === postId);

        if(post)
            return <Post post={post}/>
        else
            return <div></div>
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