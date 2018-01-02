import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link,withRouter} from 'react-router-dom'
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Post from './Post'
import SortToolbar from './SortToolbar'
import {postSortCommands} from '../utils/sort'

class Category extends Component {
    constructor(props) {
        super(props);
        this.state={
            sortBy: "BYTITLE",
            asc:true,
        }
    }

    sortCommand=(by,asc)=>{
        this.setState({sortBy:by,asc})
    }

    render() {
        const {sortBy,asc} = this.state;
        const { category } = this.props;        
        const posts = this.props.posts.filter(p=>p.category === category.path);
        let sortfx = postSortCommands.find(x=>x.command===sortBy);
        
        sortfx && posts.sort((a,b)=>sortfx.fx(a,b,asc));
        
        return <div>
            <ul className='grid'>
                <li>
                    <Link to={`/${category.path}`}>
                        <h1 style={{ display: "inline-block",margin:0 }}>{category.name}</h1>
                    </Link>
                </li>
                <li style={{justifyContent:"flex-end"}}>
                    <SortToolbar sortBy={sortBy} asc={asc} sortCommands={postSortCommands} onSortCommand={this.sortCommand}/>
                </li>            
            </ul>            
            <Divider/>
            <br/>
            {
                posts.map(p =>
                    <div key={p.id} style={{marginBottom:".5em"}}><Post post={p} /></div>
                )                        
            }
        </div>
    }
}
function mapStateToProps(state) {
    return {        
        posts: state.posts,
        apiService: state.apiService
    }
}


export default connect(mapStateToProps)(Category);
