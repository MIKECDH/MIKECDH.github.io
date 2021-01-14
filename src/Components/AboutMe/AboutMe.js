import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '95vh',
        textAlign: "center",
        backgroundColor: "#0F4C81",
        color: 'white'
    }
})); 

export default function AboutMe() {
        const classes = useStyles();
        return (
            <div className={classes.root}>
                <h1>Hi, my name is Donhyuk Choi</h1>
                <div className={classes.main}>
                    
                </div>
            </div>
        );
}