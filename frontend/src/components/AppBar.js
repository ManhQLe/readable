import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import MAppBar from 'material-ui/AppBar'
import HomeIcon from 'material-ui/svg-icons/action/home'
import ArrowRight from  'material-ui/svg-icons/hardware/keyboard-arrow-right'


const UrlPattern = require('url-pattern');

class AppBar extends Component {

    render() {
        const { floatButton,categories } = this.props;
        const pat = new UrlPattern("/:category/:postId");        
        const pat2 = new UrlPattern("/:category"); 
        const keys = pat.match(window.location.pathname)
        || pat2.match(window.location.pathname) 
        || {}
        
        const {category, postId } = keys;
        const cat = categories.find(x=>x.path ===category)
        const hasPost = postId && postId.length;

        const breadCrums= [       
            <Link key="1" to="/">Readable&nbsp; <HomeIcon color="white"/></Link>
        ];

        hasPost && breadCrums.push(
            <a key="2"><ArrowRight color="white"/></a>,
            <Link key="3" to={'/'+ category}>
                {cat?cat.name:category}
            </Link>            
        )        

        const pageTitle = <div className="barGrid">            
            {breadCrums}
        </div>

        return  <MAppBar style={{ position: "fixed" }} title={pageTitle}
                showMenuIconButton={false} 
                iconElementRight = {floatButton}
                />
    }
}

function mapToProps(state){
    return{
        categories:state.categories
    }
}

export default connect(mapToProps)(AppBar)