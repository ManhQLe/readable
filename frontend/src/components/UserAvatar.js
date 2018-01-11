import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar';

import { Alizarin, Carrot, SunFlower, Emerald, PeterRiver } from './colors'


export default function UserAvatar(props){
    const {user} = props;
    return <div style={{display:"flex",alignItems:"center"}}>
        <Avatar src={user.avatarUrl} size={45}/>
        <span style={{padding:".3em"}}>{user.name}</span>
    </div>
}