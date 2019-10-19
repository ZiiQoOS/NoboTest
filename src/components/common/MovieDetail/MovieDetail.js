import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ReactHtmlParser from 'react-html-parser';
import {IMAGE_PLACE_HOLDER} from "../../../config";

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: theme.spacing(1),

    },
}));

export default function MovieDetail(props) {
    const classes = useStyles();
    const {show} = props;

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={show.title}
                    height="200"
                    image={((show.image) ? show.image.medium : IMAGE_PLACE_HOLDER)}
                    title={show.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {show.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {ReactHtmlParser(show.summary)}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h6">
                        Type :{show.type}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h6">
                        Premiered :{show.premiered}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h6">
                        Official Website :<a href={show.officialSite}>Here</a>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
