import React,{Component} from 'react'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress';
import {mergeComments} from '../../actions'
import Post from '../Post'
import Comment from '../Comment'
import Page404 from './Page404'

class PostView extends Component{
    constructor(props){
        super(props);
        this.state={
            fetch:true
        }
    }

    componentDidMount(){
        
        const {posts,comments,match,apiService,dispatch} = this.props
        const {postId} = match.params;
        const post = posts.find(p=>p.id === postId) || {};
                
        !comments.length && apiService.getPostComments(post.id)
        .then(comments=>{
            this.setState(s=>{fetch:true})
            dispatch(mergeComments(comments))
        })
    }

    render(){
        const {posts,comments,match,apiService,dispatch} = this.props
        const {cateory,postId} = match.params;        
        const post = posts.find(p=>p.id === postId);
      

        if(post)
        {            
            const fcomments = comments.filter(c=>c.parentId === post.id)||[];

            return <div>                            
                <Post post={post}/>
                <h1>Comments</h1>
                {
                fcomments.map((c,i)=><Comment comment={c}/>)
                }
            </div>

        }
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