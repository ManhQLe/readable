import React,{Component} from 'react'
import {connect} from 'react-redux'

import Divider from 'material-ui/Divider'
import {commentSortCommands} from '../../utils/sort'
import SortToolbar from '../SortToolbar'
import {mergeAll,mergeComments} from '../../actions'
import Post from '../Post'
import Comment from '../Comment'

import CreateComment from '../CreateComment'
import {Turquoise} from '../colors'

class PostView extends Component{
    constructor(props){
        super(props);
        this.state={
            sortBy:"BYDATE",
            asc:false
        }
    }

    onSortCommand = (s,d)=>{
        this.setState({sortBy:s,asc:d});
    }

    commentPosting = (comment)=>{
        const {apiService,match,dispatch,loginAccount} = this.props;
        const data={body:comment,author:loginAccount.login, parentId: match.params.postId};

        apiService.addComment(data)
        .then(comment=>{
            apiService.getPost(match.params.postId)            
            .then(p=>{
                dispatch(mergeAll({
                    "posts":[p],
                    "comments":[comment]
                }))
                
            })
            
        })
        .catch(ex=>{
            console.log(ex)
        })
    }

    componentWillMount(){
        const {posts,match,apiService,dispatch} = this.props
        const {postId} = match.params;
        const post = posts.find(p=>p.id === postId)
        
        post && apiService.getPostComments(post.id)
        .then(cms=>{
            if(cms.length)
                dispatch(mergeComments(cms))
        })
    }

    render(){
        const {posts,comments,match} = this.props
        const {postId} = match.params;
        const post = posts.find(p=>p.id === postId)
        const {sortBy,asc} = this.state;
        
        if(post)
        {            
            const fcomments = comments.filter(c=>c.parentId === post.id)||[];
            const sort = commentSortCommands.find(c=>c.command ===sortBy);
            sort && fcomments.sort((a,b)=>sort.fx(a,b,asc));

            return <div>                            
                <Post post={post}/>
                <ul className='grid'>
                    <li>
                        <h1 className="h1-thin" style={{color:Turquoise}}>Comments ({fcomments.length})</h1>
                    </li>
                    <li style={{justifyContent:"flex-end"}}>
                        <SortToolbar sortCommands={commentSortCommands} sortBy={sortBy} asc={asc} onSortCommand={this.onSortCommand}/>
                    </li>
                </ul>
                {
                    <CreateComment onPost={this.commentPosting}/>
                }
                {
                    fcomments.map((c,i)=>{
                        return <div key={c.id} > 
                            <Comment comment={c}/>                            
                            <Divider/>
                            <br/>
                        </div>
                    })
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
        loginAccount:state.loginAccount,
        apiService: state.apiService
    }
}


export default connect(mapStateToProps)(PostView);