import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import { Alizarin, SunFlower, Emerald, Silver } from './colors'
import PropTypes from 'prop-types';

import Icon from '../icons/github.svg'


///https://api.github.com/users/manhqle

export default class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login: ""
        }
    }

    login = (type)=>{
        const {onLogin} = this.props;
        onLogin(type,type=="GITHUB"?this.state.login:type.toLocaleLowerCase());
    }

    render() {
        const { login } = this.state;
        return (
            <div style={{ textAlign: "center" }}>
                <div style={{ width: 250,display:"inline-block" }}>
                    <TextField fullWidth={true}
                        underlineStyle={{ borderColor: Silver }}
                        underlineFocusStyle={{ borderColor: Alizarin }}
                        floatingLabelText="Github's Username"
                        value={login}
                        onChange={(e) => this.setState({ login: e.target.value })}

                    />
                    <br />
                    <RaisedButton
                        style={{ width: 200 }} disabled={login.length === 0} backgroundColor="#00BCD4"
                        fullWidth={true}
                        labelStyle={{ color: "white" }}
                        label="Login with GitHub"
                        icon={<img src={Icon} width={24} height={24} alt="github" />} 
                        onClick = {()=>this.login("GITHUB")}
                    />
                    <div style={{ margin: 12 }}> OR </div>

                    <RaisedButton backgroundColor="#00BCD4"
                        fullWidth={true}
                        labelStyle={{ color: "white" }}
                        label="Continue as Annonymous"
                        onClick = {()=>this.login("ANNONYMOUS")}
                    />
                </div>
            </div>
        )
    }

    static propTypes ={
        onLogin: PropTypes.func.isRequired
    }
}