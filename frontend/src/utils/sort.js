import React from 'react'
import AZIcon from 'material-ui/svg-icons/av/sort-by-alpha'
import DateIcon from 'material-ui/svg-icons/action/date-range'
import NumericIcon from 'material-ui/svg-icons/editor/format-list-numbered'
import PersonIcon from 'material-ui/svg-icons/social/person'

export const sortByTitle=(a,b,asc)=>{
    return (asc?1:-1) * a.title.localeCompare(b.title)
}
export const sortByScore=(a,b,asc)=>{
    return (asc?1:-1) *(a.voteScore - b.voteScore);
}
export const sortByDate=(a,b,asc)=>{
    return (asc?1:-1) *(a.timestamp - b.timestamp);
}

export const sortByAuthor=(a,b,asc)=>{
    return (asc?1:-1) * a.author.localeCompare(b.author)
}

export const postSortCommands = [
    {command:"BYTITLE",title:"Sort by Title",icon:<AZIcon/>,fx:sortByTitle},
    {command:"BYDATE",title:"Sort by Date",icon:<DateIcon/>,fx:sortByDate},
    {command:"BYSCORE",title:"Sort by Score",icon:<NumericIcon/>,fx:sortByScore}
];

export const commentSortCommands = [
    {command:"BYAUTHOR",title:"Sort by Author",icon:<AZIcon/>,fx:PersonIcon},
    {command:"BYDATE",title:"Sort by Date",icon:<DateIcon/>,fx:sortByDate},
    {command:"BYSCORE",title:"Sort by Score",icon:<NumericIcon/>,fx:sortByScore}
];

