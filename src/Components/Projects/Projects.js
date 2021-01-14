import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '60vh',
        textAlign: "center",
        backgroundColor: "#FFF",
        color: 'black',
        paddingTop: "20vh"
    },
    media: {
        height: "450px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
    }
}));

export default function Projects({ projects }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Card>
                <CardMedia
                    className={classes.media}
                    image={projects.imageUrl}
                    title={projects.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {projects.title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {projects.description}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {projects.description2}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}