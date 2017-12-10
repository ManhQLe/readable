import React,{Component} from 'react'
import {connect} from 'react-redux'
class CategoryView extends Component{
    render(){
        return <div>Category View</div>
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