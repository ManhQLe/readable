import React, { Component } from 'react'
import FontIcon from 'material-ui/FontIcon'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import { Alizarin, Carrot, SunFlower, Emerald,Silver } from './colors'
import SortIcon from 'material-ui/svg-icons/content/sort'
import AZIcon from 'material-ui/svg-icons/av/sort-by-alpha'
import DateIcon from 'material-ui/svg-icons/action/date-range'
import NumericIcon from 'material-ui/svg-icons/editor/format-list-numbered'

export default function SortToolbar(props){

    function onMenuSelected(){

    }

    return <IconMenu
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        iconButtonElement={<IconButton>
            <SortIcon/>
        </IconButton>}
    >
        <MenuItem onClick={()=>onMenuSelected("Title")} primaryText="Sort by Title"
                leftIcon={<AZIcon/>}
        />
         <MenuItem onClick={()=>onMenuSelected("Date")} primaryText="Sort by Date"
                leftIcon={<DateIcon/>}
        />
         <MenuItem onClick={()=>onMenuSelected("Score")} primaryText="Sort by vote score"
                leftIcon={<NumericIcon/>}
        />        
    </IconMenu>
}
