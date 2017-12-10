import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper';


class DefaultView extends Component {
    
    
    render() {
        const { categories } = this.props;
        return <div>
            {
                categories.map(c =>                    
                    <Paper key={c.path} style={{ height: 100 }} fullwidth="true">
                        <h1>{c.name}</h1>
                    </Paper>
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