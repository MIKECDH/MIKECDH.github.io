import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "left",
        "& h1": {
            letterSpacing: "0.2rem",
        },
        "& i": {
            fontSize: "5rem",
            color: "#0388fc",

        }
    }, 
    icons: {
        display:"flex",
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: "center",
        paddingTop: "10vh"
        
    }
}));

export default function Languages() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>LANGUAGES, FRAMEWORKS</h1>
            <div className={classes.icons}>
                <i class="fab fa-java"></i>
                <i class="fab fa-js"></i>
                <i class="fab fa-css3"></i>
                <i class="fab fa-html5"></i>
                <i class="fab fa-bootstrap"></i>
                <i class="fab fa-python"></i>
                <i class="fab fa-react"></i>
                <i class="fab fa-node"></i>
            </div>
        </div>
    );
}