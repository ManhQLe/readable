import React, { Component } from 'react'
import { connect } from 'react-redux'

class Comment extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {comment} = this.props
        return 
        <div>
        By <span>{comment.author}</span> on <span>{comment.timestamp}</span>
        <p>            
            comment.body
        </p>
        <span>{comment.voteScore}</span>
        </div>
    }
}
function mapStateToProps(state) {
    return {
        apiService: state.apiService
    }
}

export default connect(mapStateToProps)(Comment);