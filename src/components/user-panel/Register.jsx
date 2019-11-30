import React, { Fragment, Component } from 'react'
import './styles.css'

class Register extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        repassword: "",
        userDescription: "",
    }

    handleSubmit = (e) => {
        if (this.state.password === this.state.repassword)
            console.log(this.state);
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <Fragment>
                <img id="backgroundUserRegisterLoginPage" alt="background" src="http://eskipaper.com/images/free-dark-wallpaper-1.jpg" />
                <div id="formStyling">
                    <h2 id="titleForm"> Register page </h2>
                    <form action="/" method="POST">
                        <div>
                            <input type="text" name="username" placeholder="Username" onBlur={this.handleChange} />
                        </div>
                        <div>
                            <input type="email" name="email" placeholder="E-mail" onBlur={this.handleChange} />
                        </div>
                        <div>
                            <input type="password" name="password" placeholder="Password" onBlur={this.handleChange} />
                        </div>
                        <div>
                            <input type="password" name="repassword" placeholder="Repeat password" onBlur={this.handleChange} />
                        </div>
                        <div>
                            <textarea name="userDescription" placeholder="Something about you" onBlur={this.handleChange}></textarea>
                        </div>
                        <div className="button-formAction">
                            <button type="button" onClick={this.handleSubmit}>Register</button>
                        </div>
                    </form>
                </div>
            </Fragment >
        )
    }
}

export default Register