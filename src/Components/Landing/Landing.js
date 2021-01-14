import React, { Component, useState, useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { makeStyles } from '@material-ui/core/styles';
import Projects from '../Projects/Projects';
import Grid from '@material-ui/core/Grid';
import ProjectInfo from '../Projects/ProjectInfo';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 'auto',
        textAlign: "center",
        backgroundColor: "white",
        color: '#000',
        fontFamily: "Roboto",
        margin: "0 auto",
        padding: "150px"
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
        color: "Black"
    },
    container: {
        height: "auto"
    },
    left: {
        marginTop:"10vh",
        height: "100vh",
        margin: 0
    },
    right: {
        marginTop:"10vh",
        height: "100vh",
        margin: 0
    },
    aboutInfo: {
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
    },
    projectInfo: {
        "& h1": {
            letterSpacing: "0.2rem"
        },
        textAlign: "left",
        marginTop: "150px"
    },
    projectList: {
        "& li": {
            paddingTop: "40px",
            paddingBottom: "40px",
            fontSize: "1.3em",
            "&:hover": {
                fontWeight: "bold"
            },
        },
        listStyleType: "none",
        margin: 0,
        padding: 0,
        paddingTop: "15px",
        fontSize: "1.2rem"
    },
    projectCard: {
        paddingTop: "20vh"
    },
    contactInfo: {
        marginTop: "200px",
        "& h1": {
          letterSpacing: "0.2rem"
        },
        "& i": {
            marginTop: "30px",
            fontSize: "3.5rem",
            textAlign: "center",
            letterSpacing: "0.3em"
        }
    }
}));

export default function Landing() {
    const classes = useStyles();
    const project = [];
    const projectList = ProjectInfo;
    const [count, setCount] = useState(0);

    const handler = function (e) {
        // console.log(e.currentTarget.getAttribute("data-index"));
        setCount(e.currentTarget.getAttribute("data-index"));
    }

    projectList.forEach((proj, index) => {
        project.push(<li key={index} onMouseOver={handler} data-index={index}>{projectList[index].title}</li>);
    });

    useEffect(() => {
        Aos.init({duration: 1500,
                  easing: 'ease-in'});
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
                <Grid data-aos = "fade-down" item xs={12} className={classes.left}>
                    <Grid container spacing={1} >
                        <Grid item xs={3}>
                            <div className={classes.projectInfo}>
                                <h1>PROJECTS</h1>
                                <ul className={classes.projectList}>
                                    {project}
                                </ul>
                            </div>
                        </Grid>
                        <Grid item xs={9}>
                            <div className={classes.projectCard}>
                                <Projects projects={ProjectInfo[count]} />
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid data-aos = "fade-out" item xs={12} className={classes.right}>
                    <Grid container spacing={1} justify="center">
                        <Grid item xs={6}>
                            <div className={classes.aboutInfo}>
                                <article>
                                    <h1>ABOUT ME</h1>
                                    <h4>Recent graduate from British Columbia Institute of Technology</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                       when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                       It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                       It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                       and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </article>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className={classes.picMike}>
                                <img src="../Pictures/mike1.jpg"></img>
                            </div>
                        </Grid>
                        <Grid item xs={12} className={classes.contactInfo}>
                            <h1>CONTACT</h1>
                            <a href="https://github.com/MIKECDH"><i class="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/mikecdh/"><i class="fab fa-linkedin"></i></a>
                            <a href="mailto:donhyuk803@hotmail.com"><i class="fas fa-envelope"></i></a>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}