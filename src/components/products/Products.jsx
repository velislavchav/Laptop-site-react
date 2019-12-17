import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import userService from '../../shared/helpers/userService';
import ProductModel from './ProductModel'

class Products extends Component {
    state = {
        products: []
    }

    async componentDidMount() {
        let products = await userService.loadAllProducts();
        products = await products.map(product => {
            return (
                <ProductModel key={product._id} data={product} />
            )
        })
        this.setState({ products })
    }

    render() {
        return (
            <Grid container spacing={0}>
                {this.state.products}
            </Grid>
        );
    }
}

export default Products