import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper';
import Category from '../Category'
import Post from '../Post'
import Divider from 'material-ui/Divider';
class DefaultView extends Component {
    render() {
        const { categories, posts } = this.props;
        return <div>
            {
                categories.map(c => <div>
                    <Category key={c.path} category={c} />
                    <Divider/>
                    {
                        posts.filter(p=>p.category === c.path).map(p =>
                            <div style={{marginBottom:".5em"}}><Post key={p.id} post={p} /></div>
                        )
                        
                    }
                </div>                
                )
            }
        </div>
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories,
        posts: state.posts,
        apiService: state.apiService
    }
}


export default connect(mapStateToProps)(DefaultView);