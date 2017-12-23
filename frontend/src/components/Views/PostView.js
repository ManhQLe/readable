import React,{Component} from 'react'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress';
import {mergePosts,mergeAll} from '../../actions'
import Post from '../Post'
import Comment from '../Comment'

import UrlPattern from 'url-pattern'

class PostView extends Component{
    constructor(props){
        super(props);        
        this.state ={
            postStatus:0
        }

        /**
         * postStatus
         * 0 : Loading,
         * 1 : OK
         * 2 : Error
         */
    }

    componentDidMount(){
        const pat = new UrlPattern("/:category/:postId");
        const keys = pat.match(window.location.pathname);
        const {posts,apiService,dispatch,comments} = this.props;
        const post = posts.find(p=>p.id===keys.id && p.category === keys.category);        
        ((post && Promise.resolve(post)) || apiService.getPost(keys.postId))
        .then(post=>{
            if(!post || !post.id || post.category!== keys.category)
                this.setState({postStatus:2})
            else
            {                
                apiService.getPostComments(keys.postId)
                .then(comments=>{
                    dispatch(mergeAll({
                        posts:[post],
                        comments
                    }))
                    this.setState({postStatus:1})
                })
            }
        })
        .catch(ex=>{
            console.log(ex)
            this.setState({postStatus:2})
        })
    
    }

    render(){        
        const {postStatus} = this.state;
        const {posts,comments,match} = this.props;
        
        let body;
        switch(postStatus){
            case 0:
                body=<div>
                    <CircularProgress size={80} thickness={5} /> <span>One moment please :)...</span>
                </div>
                break;
            case 1:

                const post = posts.find(p=>p.id===match.params.postId)
                const relComments = comments.filter(c=>c.parentId === match.params.postId);
                body=<div>
                    <Post post={post}/>
                    {
                        relComments.map(c => <Comment key={c.id} comment={c}/>)
                    }
                </div>
                break;
            case 2:
                body=<h2>Oops Err! Please try again</h2>
                break;

        }

        return body;
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