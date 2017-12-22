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
        || pat2.match(window.location.pathname) 
        || {}
        
        const { category } = keys;
        const hasCat = category && category.length;
        let link;

        const breadCrums= [
            <Link to="/"><HomeIcon color="white"/></Link>
        ];

        hasCat && breadCrums.push("<",<Link to={'/'+ category}  
        style={{ alignItems: 'center', display: "flex",alignItems:'center'}} >
            <BackArrowIcon color="white" hoverColor={Orange} />
        </Link>)


        const pageTitle = <div style={{ display: "flex" }}>            
            {breadCrums}

        </div>

        return <MAppBar style={{ position: "fixed" }} title={pageTitle}
            showMenuIconButton={false} />
    }

}