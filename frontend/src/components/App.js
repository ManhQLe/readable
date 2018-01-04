import React, { Component } from 'react';
import { Route, Switch,withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import AppBar from './AppBar'
import CategoryView from './Views/CategoryView'
import DefaultView from './Views/DefaultView'
import Page404 from './Views/Page404'
import PostView from './Views/PostView'
import { mergeCategories, mergePosts, mergeAll } from '../actions'

import '../css/app.css'

class App extends Component {
	componentDidMount() {
		const { dispatch, apiService } = this.props;
		const ps = [apiService.getCategories(), apiService.getPosts()]

		Promise.all(ps).then(([categories, posts]) => {
			dispatch(mergeAll({ categories, posts }));
		}).catch(x => {
			console.log(x);
		})
	}

	render() {
		
		return (
			<div>				
				<AppBar/>
				<div className="app-body">					
					<Switch>
						<Route exact path='/' component={DefaultView} />
						<Route exact path='/:category' component={CategoryView} />
						<Route exact path='/:category/:postId' component={PostView} />
						<Route component={Page404}/>
					</Switch>
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

export default withRouter(connect(mapStateToProps)(App))
