import React,{Component} from 'react'
import {connect} from 'react-redux'
import Post from '../Post'
class PostView extends Component{
    render(){
        return <div>
            <Post post={{}}/>
        </div>
    }
}

function mapStateToProps(state) {
    return {        
        posts: state.posts,
        apiService: state.apiService
    }
}


export default connect(mapStateToProps)(PostView);