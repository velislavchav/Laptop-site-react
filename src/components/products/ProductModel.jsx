import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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
    responsiveImage: {
        width: "100 %",
        maxWidth: "300px",
        height: "auto",
    }
};
const useStyles = makeStyles(styles);

const ProductModel = (props) => {
    const classes = useStyles();
    const { title, price, imageUrl, CPU, GPU, RAM, HDD } = props.data;

    return (
        <Grid item xs={4}>
            <Paper className={classes.paper}>
                <img className={classes.responsiveImage} src={imageUrl} alt={title} />
                <hr />
                <h1>{title}</h1>
                <ul className={classes.list}>
                    <li>CPU: {CPU} </li>
                    <li>GPU: {GPU}</li>
                    <li>RAM: {RAM}</li>
                    <li>HDD: {HDD}</li>
                </ul>
                <h3>{price} $</h3>
            </Paper>
        </Grid>
    );
}


export default ProductModel