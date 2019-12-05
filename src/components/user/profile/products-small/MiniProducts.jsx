import React, { Component } from "react";
import userService from "../../../shared/helpers/userService"
import { getCookie } from "../../../shared/helpers/cookieSetter";
import MiniProductModel from "./MiniProductModel"
import "./styles.css"

class MiniProducts extends Component {
    state = { products: [] }
    async componentDidMount() {
        let products = await userService.loadAllProducts();
        const userID = atob(getCookie("usrinf"))
        products = await products.filter(pr => pr._acl.creator === userID).reverse().slice(0, 3);
        await this.setState({ products })
    }

    render() {
        let products = this.state.products.map(pr => {
            return <MiniProductModel {...pr} key={pr._id} />
        })

        return (
            <div className="miniProductsUser">
                {!!products && products}
            </div>
        )
    }
}

export default MiniProducts;