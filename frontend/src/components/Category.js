import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link,withRouter} from 'react-router-dom'
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Post from './Post'
import SortToolbar2 from './SortToolbar2'
import AZIcon from 'material-ui/svg-icons/av/sort-by-alpha'
import DateIcon from 'material-ui/svg-icons/action/date-range'
import NumericIcon from 'material-ui/svg-icons/editor/format-list-numbered'

const sortByTitle=(p1,p2)=>{
    return p1.title.localeCompare(p2.title)
}
const sortByScore=(p1,p2)=>{
    return p1.voteScore - p2.voteScore;
}
const sortByDate=(p1,p2)=>{
    return p1.timestamp - p2.timestamp;
}

const sortCommands = [
    {command:"BYTITLE",title:"Sort by Title",icon:<AZIcon/>,fx:sortByTitle},
    {command:"BYDATE",title:"Sort by Date",icon:<DateIcon/>,fx:sortByDate},
    {command:"BYSCORE",title:"Sort by Score",icon:<NumericIcon/>,fx:sortByScore}
];



class Category extends Component {
    constructor(props) {
        super(props);
        this.state={
            sortBy: "BYTITLE"
        }
    }

    sortCommand=(by)=>{
        this.setState({sortBy:by})
    }

    render() {
        const {sortBy} = this.state;
        const { category } = this.props;        
        const posts = this.props.posts.filter(p=>p.category === category.path);
        let sortfx = sortCommands.find(x=>x.command===sortBy);
        

        sortfx && posts.sort(sortfx.fx);
        
        return <div>
            <ul className='grid'>
                <li>
                    <Link to={`/${category.path}`}>
                        <h1 style={{ display: "inline-block",margin:0 }}>{category.name}</h1>
                    </Link>
                </li>
                <li style={{justifyContent:"flex-end"}}>
                    <SortToolbar2 sortBy={sortBy} sortCommands={sortCommands} onSortCommand={this.sortCommand}/>
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
