import React from 'react'
import Grid from '@material-ui/core/Grid';
import ProductModel from './ProductModel'
import data from '../../data'

const Products = () => {
    let productsData = data.slice('');

    const products = productsData.map(product => {
        return (
            <ProductModel key={product.id} data={product} />
        )
    })

    return (
        <Grid container spacing={0}>
            {products}
        </Grid>
    );
}


export default Products