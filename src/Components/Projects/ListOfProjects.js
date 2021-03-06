import React, { useState } from 'react';
import ProjectInfo from '../Projects/ProjectInfo';
import Projects from '../Projects/Projects';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        '@media(max-width: 1050px)': {
            height: "150vh"
        }
    },
    projectInfo: {
        "& h1": {
            letterSpacing: "0.2rem",
        },
        textAlign: "left",
        marginTop: "150px",
        '@media(max-width: 1050px)': {
            marginTop: "150px",
            textAlign: "center",
            margin: "0",
            padding: "0",
        }
    },
    projectList: {
        "& li": {
            paddingTop: "40px",
            paddingBottom: "40px",
            fontSize: "1.3em",
            '@media(max-width: 1050px)': {
                paddingTop: "0",
                fontSize: "1rem",
                textAlign: "center"
            },
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
}));

export default function ListOfProjects() {
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

    return (
        <div className={classes.root}>
            <Grid container spacing={1} >
                <Grid item xs={12} xl={4} lg={4} md={12} sm={12}>
                    <div className={classes.projectInfo}>
                        <h1>PROJECTS</h1>
                        <ul className={classes.projectList}>
                            {project}
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} xl={8} lg={8} md={12} sm={12}>
                    <div className={classes.projectCard}>
                        <Projects projects={ProjectInfo[count]} />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}