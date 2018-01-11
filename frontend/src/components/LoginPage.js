import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton';
import { Alizarin, SunFlower, Emerald, Silver } from './colors'
import PropTypes from 'prop-types';


import Icon from '../icons/github.svg'

export default class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login: "",
            password:"",
            isEnabled:true,
            error:""
        }
    }

    setEnable=(isEnabled)=>{
        this.setState({isEnabled});
    }
    
    setError = (error)=>{
        this.setState({error});
    }

    login = (type)=>{
        const {onLogin} = this.props;
        onLogin(type,type=="GITHUB"?this.state.login:type.toLocaleLowerCase());
    }

    render() {
        const { login,isEnabled,error,password } = this.state;
        const canLogin = login.length && password.length

        return (
            <div className="loginCover">
                <Paper style={{ width: 300,display:"inline-block"}}>
                    <h1 className="loginHeader">Login</h1>
                    <div style={{padding:"0.5em"}}>
                    <TextField fullWidth={true}
                        disabled={!isEnabled}
                        underlineStyle={{ borderColor: Silver }}
                        underlineFocusStyle={{ borderColor: Alizarin }}
                        floatingLabelText="Github's Username"
                        value={login}
                        onChange={(e) => this.setState({ login: e.target.value })}

                    />
                    <TextField fullWidth={true}
                        disabled={!isEnabled}
                        underlineStyle={{ borderColor: Silver }}
                        underlineFocusStyle={{ borderColor: Alizarin }}
                        floatingLabelText="Password"
                        hintText="Anything you want :)"
                        value={password}
                        onChange={(e) => this.setState({ password: e.target.value })}

                    />
                    <br />
                    <br/>
                    <RaisedButton
                        style={{ width: 200 }} disabled={!canLogin} backgroundColor="#00BCD4"
                        fullWidth={true}
                        labelStyle={{ color: "white" }}
                        label="Login with GitHub"
                        icon={<img src={Icon} width={24} height={24} alt="github" />} 
                        onClick = {()=>this.login("GITHUB")}
                    />
                    <br/>
                    <hr className="dotted"/>
                    
                    <RaisedButton backgroundColor="#00BCD4"
                        fullWidth={true}
                        disabled={!isEnabled}
                        labelStyle={{ color: "white" }}
                        label="Continue as Annonymous"
                        onClick = {()=>this.login("ANNONYMOUS")}
                    />
                    <br/>
                    <br/>                    
                    <span style={{color:Alizarin}}>{error}</span>
                    </div>
                </Paper>
            </div>
        )
    }

    static propTypes ={
        onLogin: PropTypes.func.isRequired
    }
}