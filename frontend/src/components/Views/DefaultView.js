import React, { Component } from 'react'
import { connect } from 'react-redux'

import Category from '../Category'


class DefaultView extends Component {

    render() {        
        const { categories } = this.props;
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


export default connect(mapStateToProps)(DefaultView)