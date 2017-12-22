import React, { Component } from 'react'
import { Orange } from './colors'
import MAppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router-dom'
import BackArrowIcon from 'material-ui/svg-icons/navigation/arrow-back'
import HomeIcon from 'material-ui/svg-icons/action/home'
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
        ||pat2.match(window.location.pathname) 
        || {}
        
        const { category, postId } = keys;
        const hasCat = category && category.length;
        const hasPost = postId && postId.length;
        let link;

        const showBack = hasCat || hasPost;

        if (hasCat && hasPost) {
            link = "/" + category
        }
        else
            link = "/";


        const pageTitle = <div style={{ display: "flex" }}>
            
            {
                showBack && <Link to={link}  
                style={{ alignItems: 'center', display: "flex",marginRight:'.3em'}} >
                    <BackArrowIcon color="white" hoverColor={Orange} />
                </Link>
            }
 
            <span style={{ display: "inline-block" }}>Readable Home</span>
        </div>

        return <MAppBar style={{ position: "fixed" }} title={pageTitle}
            showMenuIconButton={false} />
    }

}