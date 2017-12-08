import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper';
import { mergeCategories,mergePosts } from '../actions'

class DefaultView extends Component {
    
	componentDidMount(){		
        const {dispatch, apiService} = this.props;
        apiService.getCategories()
        .then(cats=>dispatch(mergeCategories(cats)));
    }
    
    render() {
        const { categories } = this.props;

        return <div>
            {
                categories.map(c => {
                    <Paper key={c.path} style={{ height: 100 }} fullwidth="true">
                        <h1>{c.name}</h1>
                    </Paper>
                })
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