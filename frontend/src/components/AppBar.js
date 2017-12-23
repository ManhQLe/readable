import React, { Component } from 'react'
import { Orange } from './colors'
import MAppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router-dom'

import HomeIcon from 'material-ui/svg-icons/action/home'
import ArrowRight from  'material-ui/svg-icons/hardware/keyboard-arrow-right'
const UrlPattern = require('url-pattern');

export default class AppBar extends Component {
    goBack() {
        window.history.back()
    }

    render() {
        const { posts, comments } = this.props;
        const pat = new UrlPattern("/:category/:postId");        
        const pat2 = new UrlPattern("/:category"); 
        const keys = pat.match(window.location.pathname)
        || pat2.match(window.location.pathname) 
        || {}
        
        const {category, postId } = keys;
        const hasPost = postId && postId.length;
        let link;

        const breadCrums= [
            <span>
                <Link to="/"><HomeIcon color="white"/></Link>
            </span>
        ];

        hasPost && breadCrums.push(
            <span><ArrowRight color="white"/></span>,
            <span><Link to={'/'+ category}>
                {category}
            </Link>
            </span>
        )


        const pageTitle = <div className="barGrid">            
            {breadCrums}

        </div>

        return <MAppBar style={{ position: "fixed" }} title={pageTitle}
            showMenuIconButton={false} />
    }

}