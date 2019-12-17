import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom"
import "./deleteStyles.css";
import userService from "../../shared/helpers/userService";

class DeleteConfirmation extends Component {
    state = {}
    componentDidMount() {
        const { id } = this.props.location.state;
        this.setState({ id })
    }

    getConfirmationVote = (e) => {
        const getButtonValue = e.target.value;
        if (getButtonValue === "yes") {
            userService.deleteProduct(this.state.id).then(
                this.props.history.push('/')
            )
        }
    }
    render() {
        const { id } = this.state;
        return (
            <Fragment>
                <img id="backgroundDeleteConfirmation" alt="background" src="http://eskipaper.com/images/free-dark-wallpaper-1.jpg" />
                <div id="deleteConfirmationDiv">
                    <h3>Are you sure you want to delete this product?</h3>
                    <div className="buttons-deleteConfirmation">
                        <button value="yes" onClick={this.getConfirmationVote}>YES</button>
                        <Link to={`/product/${id}`}><button>NO</button></Link>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default DeleteConfirmation;