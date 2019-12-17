import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import userServices from '../../../shared/helpers/userService'
import { getCookie } from '../../../shared/helpers/cookieSetter'
import "./productInfo.css"

class ProductInfo extends Component {
    state = {}
    async componentDidMount() {
        const productId = await this.props.match.params.id;
        const product = await userServices.loadProduct(productId);
        await this.setState(product);
        let isUserCreator = false;
        let currentUser = atob(getCookie('usrinf'))
        if (currentUser === product._acl.creator) {
            isUserCreator = true;
        }
        await this.setState({ isUserCreator })
    }

    render() {
        const id = this.state._id;
        return (
            <Fragment>
                <div className="imgLeft">
                    <img id="productInfoImage" src={this.state.imageUrl} alt={this.state.title} />
                </div>
                <div className="description">
                    <h2 id="subtitleProductInfo">{this.state.title}</h2>
                    <hr />
                    <span>{this.state.description}</span>
                    <hr />
                    <div className="tableWrapper">
                        <h3>Specifications:</h3>
                        <table border="1">
                            <tbody>
                                <tr>
                                    <td className="specsTableData">CPU</td>
                                    <td>{this.state.CPU}</td>
                                </tr>

                                <tr>
                                    <td className="specsTableData">GPU</td>
                                    <td>{this.state.GPU}</td>
                                </tr>
                                <tr>
                                    <td className="specsTableData">HDD</td>
                                    <td>{this.state.HDD} GB</td>
                                </tr>
                                <tr>
                                    <td className="specsTableData">RAM</td>
                                    <td>{this.state.RAM} GB</td>
                                </tr>
                                <tr>
                                    <td className="specsTableData">SSD</td>
                                    <td>{this.state.SSD} GB</td>
                                </tr>
                                <tr>
                                    <td className="specsTableData">Weight</td>
                                    <td>{this.state.weight} kg</td>
                                </tr>
                                <tr>
                                    <td className="specsTableData">Warranty</td>
                                    <td>{this.state.warranty} years</td>
                                </tr>
                                <tr className="priceTdData">
                                    <td className="specsTableData">PRICE</td>
                                    <td>{this.state.price} $</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="btnBackToAllProducts">
                        {this.state.isUserCreator && <Link to={{
                            pathname: '/delete-confirmation',
                            state: { id }
                        }}><button id={id}> DELETE </button></Link>}
                        <Link to="/products"><button>BACK TO ALL PRODUCTS</button></Link>
                    </div>
                </div>
            </Fragment>
        );
    }
}


export default ProductInfo