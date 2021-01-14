import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "200px",
        "& h1": {
          letterSpacing: "0.2rem"
        },
        "& i": {
            marginTop: "30px",
            fontSize: "3.5rem",
            textAlign: "center",
            letterSpacing: "0.3em"
        },
        "& a": {
            color: "#0388fc"
        }
    }
}));

export default function Contact() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>CONTACT</h1>
            <a href="https://github.com/MIKECDH"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/mikecdh/"><i class="fab fa-linkedin"></i></a>
            <a href="mailto:donhyuk803@hotmail.com"><i class="fas fa-envelope"></i></a>
        </div>
    );
}