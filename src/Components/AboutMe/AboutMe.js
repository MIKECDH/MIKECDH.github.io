import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        "& h1": {
            letterSpacing: "0.2rem",
        },
        "& h4": {
            paddingTop: "50px",
            '@media(max-width: 1050px)': {
                letterSpacing: "0",
                fontSize: "14pt"
            }
        },
        "& p": {
            fontSize: "1.2rem",
            paddingTop: "15px",
            '@media(max-width: 1050px)': {
                letterSpacing: "0",
                fontSize: "0.8rem"
            }
        },
        textAlign: "left",
        '@media(max-width: 1050px)': {
            marginTop: "0",
            textAlign: "center",
            padding: "5px"
        }
    }
}));

export default function AboutMe() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <article>
                <h1>ABOUT ME</h1>
                {/* <h4>Recent graduate from British Columbia Institute of Technology</h4> */}
                <p>
                    I graduated from BCIT Computer Systems Technology program (Technical Programming Option). 
                    I am a person with various skills and knowledge from past working experience from a kitchen cabinet designer.
                    Since then, I pursued a career in tech industry because I had a profound love for computers.
                    From BCIT, I have learnt many skills in the form of languages, theories related to the tech industry.
                </p>
            </article>
        </div>
    );
}