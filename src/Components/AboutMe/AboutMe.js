import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        "& h1": {
            letterSpacing: "0.2rem",
        },
        "& h4": {
            paddingTop: "50px"
        },
        "& p": {
            fontSize: "1.2rem",
            paddingTop: "15px"
        },
        textAlign: "left",
    }
}));

export default function AboutMe() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <article>
                <h1>ABOUT ME</h1>
                <h4>Recent graduate from British Columbia Institute of Technology</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </article>
        </div>
    );
}