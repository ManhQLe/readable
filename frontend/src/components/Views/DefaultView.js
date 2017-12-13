import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper';
import Category from '../Category'

class DefaultView extends Component {    
    render() {
        const { categories } = this.props;
        return <div>
            {
                categories.map(c =>                    
                    <Category key={c.path} category={c}/>
                )
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