import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper';
import Category from '../Category'

class DefaultView extends Component {
    constructor(props){
        super(props)        
    }

    render() {        
        const { categories, posts } = this.props;
        return <div>
            {
                categories.map(c =><Category category={c} key={c.path}/>)
            }
        </div>
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories,
        apiService: state.apiService
    }
}


export default connect(mapStateToProps)(DefaultView);