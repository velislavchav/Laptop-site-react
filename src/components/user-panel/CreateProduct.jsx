import React, { Fragment, Component } from 'react'
import './styles.css'

class CreateProduct extends Component {
    state = {
        title: "",
        CPU: "",
        GPU: "",
        HDD: "",
        RAM: "",
        windows: false,
        SSD: "",
        weight: 0,
        warranty: 0,
        description: "",
    }

    handleSubmit = (e) => {
        console.log(this.state);
    }

    handleChange = (e) => {
        if (e.target.name === "windows") {
            const { name, checked } = e.target;
            this.setState({
                [name]: checked
            })
        } else {
            const { name, value } = e.target;
            this.setState({
                [name]: value
            })
        }
    }

    render() {
        return (
            <Fragment>
                <img id="backgroundUserRegisterLoginPage" alt="background" src="http://eskipaper.com/images/free-dark-wallpaper-1.jpg" />
                <div id="formStyling">
                    <h2 id="titleForm"> Create product </h2>
                    <form action="/" method="POST">
                        <div>
                            <input type="text" name="title" placeholder="Title" onBlur={this.handleChange} />
                        </div>
                        <div>
                            <input type="text" name="CPU" placeholder="CPU" onBlur={this.handleChange} />
                        </div>
                        <div>
                            <input type="text" name="GPU" placeholder="GPU" onBlur={this.handleChange} />
                        </div>
                        <div>
                            <input type="text" name="HDD" placeholder="HDD" onBlur={this.handleChange} />
                        </div>
                        <div>
                            <input type="text" name="RAM" placeholder="RAM" onBlur={this.handleChange} />
                        </div>
                        <div>
                            <label className="labels" htmlFor="WindowsCheckbox"> Windows included: </label>
                            <input id="WindowsCheckbox" type="checkbox" name="windows" placeholder="Windows" onChange={this.handleChange} />
                        </div>
                        <div>
                            <input type="text" name="SSD" placeholder="SSD" onBlur={this.handleChange} />
                        </div>
                        <div>
                            <input type="number" name="weight" min="0" max="15" step="0.5" placeholder="Weight" onBlur={this.handleChange} />
                        </div>
                        <div>
                            <input type="number" min="0" max="5" name="warranty" placeholder="Warranty" onBlur={this.handleChange} />
                        </div>
                        <div>
                            <textarea name="description" placeholder="Product description" onBlur={this.handleChange}></textarea>
                        </div>
                        <div className="button-formAction">
                            <button type="button" onClick={this.handleSubmit}> Create </button>
                        </div>
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default CreateProduct