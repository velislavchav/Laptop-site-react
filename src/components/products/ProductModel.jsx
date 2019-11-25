import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";


const styles = {
    paper: {
        padding: "2vw",
        textAlign: "center",
        color: "#000000",
        whiteSpace: "nowrap",
        background: "#ffffff",
        marginTop: "2vh",
        marginBottom: "2vh",
    },
    list: {
        listStyleType: "none",
    },
    media: {
        height: "250px",
        width: "100%",
    },
};

const useStyles = makeStyles(styles);

const ProductModel = (props) => {
    const classes = useStyles();
    const { title, price, imageUrl, CPU, GPU, RAM, HDD, id } = props.data;
    let getLinkTo = `/product/${id}`

    return (
        <Grid item xs={4}>
            <Link to={getLinkTo}>
                <Paper className={classes.paper}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            title={title}
                            image={imageUrl}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="h2">
                                {title}
                            </Typography>
                            <Typography paragraph variant="body1" color="textSecondary" component="ul" className={classes.list}>
                                <li><b>CPU:</b> {CPU} </li>
                                <li><b>GPU:</b> {GPU}</li>
                                <li><b>RAM:</b> {RAM}</li>
                                <li><b>HDD:</b> {HDD}</li>
                            </Typography>
                            <Typography variant="h4" color="primary" component="h2">
                                Price: {price} $
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Paper>
            </Link>
        </Grid>

    );
}

export default ProductModel