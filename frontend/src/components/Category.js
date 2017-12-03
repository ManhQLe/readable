import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper';

class Category extends Component {
    
    render(){
        return <Paper style={{height:100}} fullWidth/>
    }
}

function mapStateToProps(state) {
    return {}
}


export default connect(mapStateToProps)(Category);