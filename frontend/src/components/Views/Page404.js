import React,{Component} from 'react'
import HomeIcon from 'material-ui/svg-icons/action/home'
import {Link} from 'react-router-dom'
import {PeterRiver,SunFlower, Silver, Alizarin } from '../colors'

export default function Page404(){    
        return <div style={{textAlign:'center'}}>        
            <h1 className="h1-thin" style={{color:Alizarin}}>404! There is nothing here to see :)</h1>    
            <Link to="/"><HomeIcon style={{transform:"scale(2)"}} color={Silver} hoverColor={PeterRiver}/></Link>
        </div>
}
