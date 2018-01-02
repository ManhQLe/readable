import React,{Component} from 'react'
import {connect} from 'react-redux'
import {BelizeHole, Turquoise} from '../colors'
import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress';
import Divider from 'material-ui/Divider'

import {commentSortCommands} from '../../utils/sort'
import SortToolbar from '../SortToolbar'
import {mergeComments} from '../../actions'
import Post from '../Post'
import Comment from '../Comment'
import Page404 from './Page404'



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

    render(){
        const {posts,comments,match,apiService,dispatch} = this.props
        const {postId} = match.params;
        const post = posts.find(p=>p.id === postId)
        const {sortBy,asc} = this.state;
        
        post && !comments.length && apiService.getPostComments(post.id)
        .then(cms=>{
            if(cms.length)
                dispatch(mergeComments(cms))
        })
      

        if(post)
        {            
            const fcomments = comments.filter(c=>c.parentId === post.id)||[];
            const sort = commentSortCommands.find(c=>c.command ===sortBy);
            sort && fcomments.sort((a,b)=>sort.fx(a,b,asc));

            return <div>                            
                <Post post={post}/>
                <ul className='grid'>
                    <li>
                        <h1 className="h1-thin" style={{color:Turquoise}}>Comments</h1>
                    </li>
                    <li style={{justifyContent:"flex-end"}}>
                        <SortToolbar sortCommands={commentSortCommands} sortBy={sortBy} asc={asc} onSortCommand={this.onSortCommand}/>
                    </li>
                </ul>
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
        apiService: state.apiService
    }
}


export default connect(mapStateToProps)(PostView);