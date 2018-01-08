import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import { Alizarin, SunFlower, Emerald, Silver } from './colors'
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import Icon from '../icons/github.svg'


  

export default class LoginPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div style={{textAlign:"center"}}>

            <div>
                <RaisedButton backgroundColor="#00BCD4" 
                labelStyle={{color:"white"}}
                label="Login with GitHub" 
                icon={<img src={Icon} width={24} height={24} alt="github" />}/>
            </div>
            <div style={{margin:12}}> OR </div>
            <RaisedButton label="Login as Annonymous" />
        </div>
    }
}