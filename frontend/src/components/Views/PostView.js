import React,{Component} from 'react'
import {connect} from 'react-redux'
class PostView extends Component{
    render(){
        return <div>Post View</div>
    }
}

function mapStateToProps(state) {
    return {        
        posts: state.posts,
        apiService: state.apiService
    }
}


export default connect(mapStateToProps)(PostView);