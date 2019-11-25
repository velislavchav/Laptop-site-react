import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import data from "../../data"
import "./productInfo.css"


class ProductInfo extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    componentDidMount() {
        let id = this.props.match.params.id
        const chosenProduct = data.find(pr => +pr.id === +id);
        this.setState({ ...chosenProduct })
    }

    render() {
        return (
            <Fragment>
                <div className="imgLeft">
                    <img id="productInfoImage" src={this.state.imageUrl} alt={this.state.title} />
                </div>
                <div className="description">
                    <h2 id="subtitleProductInfo">{this.state.title}</h2>
                    <hr />
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe corrupti ducimus aliquid quidem voluptates, unde commodi minima dolore deleniti, iste obcaecati, sequi nam officiis magni accusantium neque velit veniam nisi.</span>
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
                                    <td>{this.state.HDD}</td>
                                </tr>
                                <tr>
                                    <td className="specsTableData">RAM</td>
                                    <td>{this.state.RAM}</td>
                                </tr>
                                <tr>
                                    <td className="specsTableData">Windows</td>
                                    <td>{this.state.windowsInstalled}</td>
                                </tr>
                                <tr>
                                    <td className="specsTableData">SSD</td>
                                    <td>{this.state.SSD}</td>
                                </tr>
                                <tr>
                                    <td className="specsTableData">Weight</td>
                                    <td>{this.state.weight}</td>
                                </tr>
                                <tr>
                                    <td className="specsTableData">Warranty</td>
                                    <td>{this.state.waranty}</td>
                                </tr>
                                <tr className="priceTdData">
                                    <td className="specsTableData">PRICE</td>
                                    <td>{this.state.price} $</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="btnBackToAllProducts">
                        <Link to="/products"><button>BACK TO ALL PRODUCTS</button></Link>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default ProductInfo