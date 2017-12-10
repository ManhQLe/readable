import React, { Component } from 'react'
import Paper from 'material-ui/Paper';


function Category(props){
    const {category} = props;
    return <Paper fullWidth={true}>
        <h1>{category.name}</h1>
    </Paper>
}

export default Category;