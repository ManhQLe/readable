import React,{Component} from 'react'
import {connect} from 'react-redux'

import Category from '../Category';
import Page404 from './Page404'

class CategoryView extends Component{
    render(){
        const {categories,match}  = this.props;
        
        
        const cat = categories.find(c=>c.path === match.params.category);


        let renderBlock        
        renderBlock = cat? <Category category={cat}/>
        :
        <div>
            {
                !cat && categories.length !== 0 && <Page404/>
            }
        </div>
        
       
        return renderBlock;
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories
    }
}


export default connect(mapStateToProps)(CategoryView);