import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Post from './Post'
import SortToolbar from './SortToolbar'


class Category extends Component {
    constructor(props) {
        super(props);
        this.state={
            sortBy: ''
        }
    }

    sortCommand=(by)=>{
        this.setState({sortBy:by})
    }

    render() {
        const {sortBy} = this.state;
        const { category } = this.props;        
        const posts = this.props.posts.filter(p=>p.category === category.path);

        
        return <div>
            <ul class='grid'>
                <li>
                    <h1 style={{ display: "inline-block",margin:0 }}>{category.name}</h1>
                </li>
                <li style={{justifyContent:"flex-end"}}>
                    <SortToolbar sortBy={sortBy} onSortCommand={this.sortCommand}/>
                </li>
            
            </ul>
            <Divider/>
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
