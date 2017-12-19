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


function SortToolbar(props) {
    const {BYTITLE,BYDATE,BYSCORE} = SortToolbar
    const { sortBy = BYTITLE, onSortCommand = () => { } } = props
    const {DESCS} =  SortToolbar;
    let decorateIcon;
    let desc;
    switch (sortBy) {
        case BYTITLE:
            decorateIcon = <AZIcon />
           
            break;
        case BYDATE:
            decorateIcon = <DateIcon />
            break;
        case BYSCORE:
            decorateIcon = <NumericIcon />
            break;
        default:
            decorateIcon = <SortIcon />
    }
    desc = DESCS[sortBy]
    desc = desc||"Sort";

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
            <MenuItem value={BYTITLE} primaryText="Sort by Title"
                leftIcon={<AZIcon />}
            />
            <MenuItem value={BYDATE} primaryText="Sort by Date"
                leftIcon={<DateIcon />}
            />
            <MenuItem value={BYSCORE} primaryText="Sort by Score"
                leftIcon={<NumericIcon />}
            />
        </IconMenu>
        <span>{desc}</span>
    </div>
}

SortToolbar.BYTITLE = 'BYTITLE'
SortToolbar.BYDATE = 'BYDATE'
SortToolbar.BYSCORE = 'BYSCORE'
SortToolbar.DESCS = {
    [SortToolbar.BYTITLE]:"Sort by Title",
    [SortToolbar.BYDATE]:"Sort by Date",
    [SortToolbar.BYSCORE]:"Sort by Score"
}


SortToolbar.propTypes = {
    sortBy: PropTypes.string,
    onSortCommand: PropTypes.func
}

export default SortToolbar;