import React from 'react'
import Grid from '@material-ui/core/Grid';
import ProductModel from './ProductModel'

const Products = (props) => {
    let productsData = props.data;

    const products = productsData.map(product => {
        return (
            <ProductModel key={product.id} data={product} />
        )
    })

    return (
        <Grid container spacing={1}>
            {products}
        </Grid>
    );
}


export default Products