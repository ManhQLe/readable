import React, { Component } from 'react';
import { Route, Switch,withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


import AppBar from './AppBar'
import CategoryView from './Views/CategoryView'
import DefaultView from './Views/DefaultView'
import Page404 from './Views/Page404'
import PostView from './Views/PostView'
import CreatePostDialog from './CreatePostDialog'

import {mergePosts, mergeAll } from '../actions'

import '../css/app.css'

class App extends Component {
	constructor(props){
		super(props)
		this.state ={
			dlgOpen:false
		}
	}

	componentDidMount() {
		const { dispatch, apiService } = this.props;
		const ps = [apiService.getCategories(), apiService.getPosts()]

		Promise.all(ps).then(([categories, posts]) => {
			dispatch(mergeAll({ categories, posts }));
		}).catch(x => {
			console.log(x);
		})
	}

	toggleDlg = ()=>{
		this.setState(s=>{return {dlgOpen:!s.dlgOpen}})
	}

	onAddPost = ()=>{
		this.toggleDlg();
	}

	dlgResponse = (act,data)=>{
		const {apiService, dispatch} = this.props;
		act==="SUBMIT" && apiService.createPost(data)
		.then(post=>{
			dispatch(mergePosts(post))
			this.toggleDlg();
		})
		.catch(ex=>{

		});
		
	}

	render() {
		const {dlgOpen} = this.state;
		const bnt = <FloatingActionButton mini={true} secondary={true} onClick={this.onAddPost}>            
		<ContentAdd /> 
		</FloatingActionButton>		

		return (
			<div>				
				<AppBar floatButton={bnt}/>
				<div className="app-body">					
					<Switch>
						<Route exact path='/' component={DefaultView} />
						<Route exact path='/:category' component={CategoryView} />
						<Route exact path='/:category/:postId' component={PostView} />
						<Route component={Page404}/>
					</Switch>
				</div>
				<CreatePostDialog open={dlgOpen} categories={this.props.categories} onAction={this.dlgResponse}/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		apiService: state.apiService,
		categories: state.categories
	}
}

export default withRouter(connect(mapStateToProps)(App))
