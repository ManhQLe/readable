import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper';

class Category extends Component {

    render() {
        const { categories } = this.props;

        return <div>
            {
                categories.map(c => {
                    <Paper style={{ height: 100 }} fullwidth="true" />
                })
            }
        </div>

    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories
    }
}


export default connect(mapStateToProps)(Category);