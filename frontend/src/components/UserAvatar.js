import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar';

import { Alizarin, Carrot, SunFlower, Emerald, PeterRiver } from './colors'


export default function UserAvatar(props){
    const {user,size=45} = props;
    return <div style={{display:"flex",alignItems:"center"}}>
        <Avatar src={user.avatarUrl} size={size}/>
        <span style={{padding:".3em"}}>{user.name}</span>
    </div>
}