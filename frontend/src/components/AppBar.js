import React, { Component } from 'react'
import { Orange } from './colors'
import MAppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import BackArrowIcon from 'material-ui/svg-icons/navigation/arrow-back'
import HomeIcon from 'material-ui/svg-icons/action/home'

export default class AppBar extends Component {
    goBack(){
        window.history.back()
    }

    render() {
        const noBack = window.history.length <1

        const pageTitle = <div style={{ display: "flex" }} disabled={noBack}>
            <span style={{ alignItems: 'center', display: "flex" }}>
                <IconButton onClick={this.goBack} >
                    <BackArrowIcon color="white" hoverColor={Orange} />
                </IconButton>
            </span>
            <span style={{ display: "inline-block" }}>Readable Home</span>
        </div>

        return <MAppBar style={{ position: "fixed" }} title={pageTitle}
            showMenuIconButton={false} />
    }

}