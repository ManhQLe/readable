import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import CategoryView from './Views/CategoryView'
import DefaultView from './Views/DefaultView'
import PostView from './Views/PostView'
import { mergeCategories,mergePosts } from '../actions'
import '../css/app.css'

class App extends Component {	
	componentDidMount(){		
        const {dispatch, apiService} = this.props;
        apiService.getCategories()
        .then(cats=>{            
            dispatch(mergeCategories(cats))
		});
		
		apiService.getPosts()
		.then(posts=>dispatch(mergePosts(posts)));

    }
	render() {
		return (
			<div>				
				<AppBar style={{position:"fixed"}} title={"Readable Home"} showMenuIconButton={false}/>				
				<div className="app-body">
					<Route exact path='/' component={DefaultView} />	
					<Route exact path='/:category' component={CategoryView}/>
					<Route path='/:category/:postId' component={PostView}/>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		apiService: state.apiService
	}
}

export default connect(mapStateToProps)(App)
