import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { makeStyles } from '@material-ui/core/styles';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Languages from '../Languages/Languages'
import ListOfProjects from "../Projects/ListOfProjects";
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        height: "auto",
        textAlign: "center",
        backgroundColor: "white",
        color: '#000',
        fontFamily: "Roboto",
        margin: "0 auto",
        padding: "150px",
        overflow: "hidden",
        '@media(max-width: 1050px)' : {
            padding: 0
        }
    },
    top: {
        paddingTop: "0",
        margin: "0 auto",
        height: "70vh",
        backgroundImage: "url('../Pictures/andrej-lisakov-3A4XZUopCJA-unsplash.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },
    name: {
        paddingTop: "250px",
        paddingLeft: "20px",
        margin: "0 auto",
        color: "Black",
        '@media(max-width: 1050px)': {
            "& h1": {
                fontSize: "1.5rem"
            },
            "& p": {
                fontSize: "1.rem"
            }
        }
    },
    container: {
        height: "auto"
    },
    left: {
        marginTop: "10vh",
        height: "100vh",
        margin: 0,
        '@media(max-width: 1050px)': {
            marginTop: "5vh",
            height: "130vh"
        },
        '@media(min-width: 1050px) and (max-width: 1275px)': {
            height: "180vh",
        },
        '@media(min-width: 280px) and (max-width: 374px)': {
            height: "180vh"
        },
        '@media(min-width: 375px) and (max-width: 413px)': {
            height: "170vh"
        },
        '@media(min-width: 414px) and (max-width: 540px)': {
            height: "150vh"
        },
    },
    right: {
        marginTop: "10vh",
        height: "130vh",
        margin: 0,
        '@media(max-width: 1050px)': {
            marginTop: "5vh",
            height: "130vh"
        },
        '@media(min-width: 280px) and (max-width: 374px)': {
            height: "190vh"
        },
        '@media(min-width: 375px) and (max-width: 413px)': {
            height: "170vh"
        },
        '@media(min-width: 414px) and (max-width: 540px)': {
            height: "150vh"
        },
        '@media(min-width: 1300px) and (max-width: 1920px)': {
            height: "auto"
        },
    },
    middle: {
        marginTop: "10vh",
        height: "50vh",
        margin: 0,
        '@media(max-width: 1050px)': {
            marginTop: "10vh",
        },
    }
}));

export default function Landing() {
    const classes = useStyles();

    useEffect(() => {
        Aos.init({
            duration: 1300,
            easing: 'ease-in',
            once: "true"
        });
    }, []);

    return (
        <div className={classes.root}>
            <div className={classes.top}>
                <div data-aos="fade-up" className={classes.name}>
                    <h1>Hi I'm Donhyuk Choi!</h1>
                    <p>Junior Software Developer</p>
                </div>
            </div>

            <Grid container spacing={0} className={classes.container}>
                <Grid data-aos="fade-down" data-aos-once="true" item xs={12} xl={12} className={classes.left}>
                    <ListOfProjects />
                </Grid>

                <Grid data-aos="fade-in" data-aos-once="true" item xs={12} xl={12} className={classes.middle}>
                    <Languages />
                </Grid>

                <Grid data-aos="fade-out" data-aos-once="true" item xs={12} className={classes.right}>
                    <Grid container spacing={1} justify="center">
                        <Grid item xs={12} xl={6}>
                            <div>
                                <AboutMe />
                            </div>
                        </Grid>
                        <Grid item xs={12} xl={6}>
                            <div>
                                <img src="../Pictures/mike1.JPG" alt="Donhyuk Choi"></img>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <Contact />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}