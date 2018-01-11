import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import UserAvatar from './UserAvatar'
import AppBar from './AppBar'
import CategoryView from './Views/CategoryView'
import DefaultView from './Views/DefaultView'
import Page404 from './Views/Page404'
import PostView from './Views/PostView'
import CreatePostDialog from './CreatePostDialog'
import LoginPage from './LoginPage'
import { mergePosts, mergeAll } from '../actions'

import '../css/app.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			dlgOpen: false
		}
	}	

	toggleDlg = () => {
		this.setState(s => { return { dlgOpen: !s.dlgOpen } })
	}

	onAddPost = () => {
		this.toggleDlg();
	}

	dlgResponse = (act, data) => {
		const { apiService, dispatch, loginAccount } = this.props;
		this.toggleDlg();
		if (act === "SUBMIT") {
			data.author = loginAccount.login
			apiService.createPost(data)
				.then(post => {
					dispatch(mergePosts([post]))
					this.props.history.push(`${post.category}/${post.id}`);
				})
				.catch(ex => {
					console.log(ex)
				});
		}
	}

	onLogin = (type, un) => {
		const LOGINFORM = this.refs.LOGINFORM;
		LOGINFORM.setEnable(false);

		const { apiService, dispatch } = this.props;
		const isGit = type === "GITHUB";
		apiService.login(un, isGit)
			.then(u => {
				LOGINFORM.setEnable(true);
				const ps = [apiService.getCategories(), apiService.getPosts(), Promise.resolve(u)]

				Promise.all(ps).then(([categories, posts, loginAccount]) => {
					dispatch(mergeAll({ categories, posts, loginAccount }));

				}).catch(x => {
					console.log(x);
				})
			})
			.catch(ex => {
				ex.then(m =>
					LOGINFORM.setState({
						isEnabled: true,
						error: m
					}))
			})

	}

	render() {
		const { dlgOpen } = this.state;
		const { loginAccount } = this.props;
		if (loginAccount) {

			const addPostBtn = <FloatingActionButton
				className="addPostFloatButton"
				mini={true} secondary={true} onClick={this.onAddPost}>
				<ContentAdd />
			</FloatingActionButton>

			return (
				<div>
					<AppBar floatButton={<UserAvatar user={loginAccount} />} />
					{
						addPostBtn
					}
					<div className="app-body">

						<Switch>
							<Route exact path='/' component={DefaultView} />
							<Route exact path='/:category' component={CategoryView} />
							<Route exact path='/:category/:postId' component={PostView} />
							<Route component={Page404} />
						</Switch>
					</div>
					<CreatePostDialog open={dlgOpen} categories={this.props.categories} onAction={this.dlgResponse} />
				</div>
			);
		}
		else {
			return <LoginPage ref="LOGINFORM" onLogin={this.onLogin} />
		}
	}
}

function mapStateToProps(state) {
	return {
		apiService: state.apiService,
		categories: state.categories,
		loginAccount: state.loginAccount
	}
}

export default withRouter(connect(mapStateToProps)(App))
