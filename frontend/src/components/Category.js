import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Divider from 'material-ui/Divider';
import Post from './Post'
import SortToolbar from './SortToolbar'
import {postSortCommands} from '../utils/sort'
import {setCollapseState} from '../actions'

class Category extends Component {
    constructor(props) {
        super(props);
        this.state={
            sortBy: "BYTITLE",
            asc:true,
            collapsed:false
        }
    }

    sortCommand=(by,asc)=>{
        this.setState({sortBy:by,asc})
    }

    toggleCollapse=()=>{
        const { category,dispatch,collapseStates } = this.props; 
        const path =category.path;
        dispatch(setCollapseState(path,!collapseStates[path]));
    }

    render() {
        const {sortBy,asc} = this.state;
        const { category,collapseStates } = this.props;        
        const posts = this.props.posts.filter(p=>p.category === category.path);
        let sortfx = postSortCommands.find(x=>x.command===sortBy);
        const collapsed = collapseStates[category.path]?true:false;

        sortfx && posts.sort((a,b)=>sortfx.fx(a,b,asc));
        
        return <div>
            <ul className='grid'>
                <li>
                    <i onClick={this.toggleCollapse} className="fa fa-caret-right expandButton" aria-hidden="true" data-collapsed={collapsed.toString()}></i>
                    <Link className="cat" to={`/${category.path}`}>
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
                !collapsed && posts.map(p =>
                    <div key={p.id} style={{marginBottom:".5em"}}>
                        <Post post={p} />
                        <br/>
                    </div>
                )                        
            }
        </div>
    }
}
function mapStateToProps(state) {
    return {        
        posts: state.posts,
        apiService: state.apiService,
        collapseStates: state.collapseStates    
    }
}


export default connect(mapStateToProps)(Category);
