import React, { Component } from 'react'
import FontIcon from 'material-ui/FontIcon'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import { Alizarin, Carrot, SunFlower, Emerald, PeterRiver } from './colors'
import SortIcon from 'material-ui/svg-icons/content/sort'
import AZIcon from 'material-ui/svg-icons/av/sort-by-alpha'
import DateIcon from 'material-ui/svg-icons/action/date-range'
import NumericIcon from 'material-ui/svg-icons/editor/format-list-numbered'

import PropTypes from 'prop-types';


function SortToolbar2(props) {

    const { defaultCommand = null, sortCommands, onSortCommand = () => { } } = props
    
    const c =  sortCommands.find(x=>x.command === defaultCommand)


    return <div style={{display:"inline-flex",alignItems:"center" }}>
        <IconMenu
            onChange={(e,v)=>onSortCommand(v)}
            anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            iconStyle={{
                color:Carrot
            }}
            iconButtonElement={<IconButton>
                {decorateIcon}
            </IconButton>}
        >
            {
                sortCommands.map(s=>{
                    return <MenuItem key={s.command} value={s.command} primaryText={s.title}
                    leftIcon={s.icon}
                />
                })
            }
        </IconMenu>
        <span>{(c && c.title) || ""}</span>
    </div>
}


SortToolbar2.propTypes = {
    sortBy: PropTypes.string,
    onSortCommand: PropTypes.func
}

export default SortToolbar2;