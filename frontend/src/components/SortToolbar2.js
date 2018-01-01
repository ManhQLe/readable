import React, { Component } from 'react'
import FontIcon from 'material-ui/FontIcon'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import { Alizarin, Carrot, SunFlower, Emerald, PeterRiver } from './colors'
import SortIcon from 'material-ui/svg-icons/content/sort'


import PropTypes from 'prop-types';


function SortToolbar2(props) {

    const { sortBy = null, sortCommands, onSortCommand = () => { } } = props
    
    const c = sortCommands.find(x=>x.command === sortBy)


    return <div style={{display:"inline-flex",alignItems:"center" }}>
        <IconMenu
            onChange={(e,v)=>onSortCommand(v)}
            anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            iconStyle={{
                color:Carrot
            }}
            iconButtonElement={<IconButton>
                {(c&&c.icon) || <SortIcon />}
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