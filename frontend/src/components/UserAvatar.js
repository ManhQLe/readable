import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar';

import { Alizarin, Carrot, SunFlower, Emerald, PeterRiver } from './colors'
import PropTypes from 'prop-types'

export default function UserAvatar(props){
    const {user,size=45} = props;
    return <div style={{display:"inline-flex",alignItems:"center"}}>
        <Avatar src={user.avatarUrl} size={size}/>
        <span style={{padding:".3em"}}>{user.name}</span>
    </div>
}

UserAvatar.propTypes = {
    user:PropTypes.object.isRequired,
    size:PropTypes.number    
}