import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link,withRouter} from 'react-router-dom'
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Post from './Post'
import SortToolbar from './SortToolbar'

const sortByTitle=(p1,p2)=>{
    return p1.title.localeCompare(p2.title)
}
const sortByScore=(p1,p2)=>{
    return p1.voteScore - p2.voteScore;
}
const sortByDate=(p1,p2)=>{
    return p1.timestamp - p2.timestamp;
}



class Category extends Component {
    constructor(props) {
        super(props);
        this.state={
            sortBy: SortToolbar.BYTITLE
        }
    }

    sortCommand=(by)=>{
        this.setState({sortBy:by})
    }

    render() {
        const {sortBy} = this.state;
        const { category } = this.props;        
        const posts = this.props.posts.filter(p=>p.category === category.path);
        let sortfx;
        switch(sortBy){
            case SortToolbar.BYDATE:
                sortfx = sortByDate;
                break;
            case SortToolbar.BYTITLE:
                sortfx = sortByTitle;
                break;
            case SortToolbar.BYSCORE:
                sortfx = sortByScore;
                break;
        }

        sortfx && posts.sort(sortfx);
        
        return <div>
            <ul className='grid'>
                <li>
                    <Link to={`/${category.path}`}>
                        <h1 style={{ display: "inline-block",margin:0 }}>{category.name}</h1>
                    </Link>
                </li>
                <li style={{justifyContent:"flex-end"}}>
                    <SortToolbar sortBy={sortBy} onSortCommand={this.sortCommand}/>
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
