import React, { Fragment, Component } from 'react'
import './styles.css'

class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    handleSubmit = (e) => {
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
                    <h2 id="titleForm"> Login page </h2>
                    <form action="/my-handling-form-page" method="POST">
                        <div>
                            <input type="text" name="username" placeholder="Username" />
                        </div>
                        <div>
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                        <div className="button-formAction">
                            <button type="button"> Login </button>
                        </div>
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default Login