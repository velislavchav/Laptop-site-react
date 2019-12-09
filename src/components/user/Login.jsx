import React, { Fragment, Component } from 'react'
import withForm from '../shared/hocs/withForm'
import userService from '../shared/helpers/userService';
import './styles.css'

class Login extends Component {
    state = {}
    usernameChangeHandler = this.props.controlChangeHandlerFactory('username');
    passwordChangeHandler = this.props.controlChangeHandlerFactory('password');

    submitHandler = async () => {
        const errors = await this.props.getFormErrorState();
        if (!!errors) { return; }
        const data = await this.props.getFormState();
        const isValidLogin = await userService.login(data)
        if (isValidLogin === "InvalidCredentials") {
            this.setState({ isValidLogin: false })
        } else {
            await this.props.history.push('/');
            await window.location.reload();
        }
    }

    render() {
        const { isValidLogin } = this.state;
        return (
            <Fragment>
                <img id="backgroundUserRegisterLoginPage" alt="background" src="http://eskipaper.com/images/free-dark-wallpaper-1.jpg" />
                <div id="formStyling">
                    <h2 id="titleForm"> Login page </h2>
                    <form action="/my-handling-form-page" method="POST">
                        {isValidLogin === false && <div className="validateInputs"> Inavlid username or password. Try again!</div>}
                        <div>
                            <input type="text" name="username" placeholder="Username" onChange={this.usernameChangeHandler} />
                        </div>
                        <div>
                            <input type="password" name="password" placeholder="Password" onChange={this.passwordChangeHandler} />
                        </div>
                        <div className="button-formAction">
                            <button type="button" onClick={this.submitHandler}> Login </button>
                        </div>
                    </form>
                </div>
            </Fragment>
        )
    }
}

const initialFormState = {
    username: "",
    password: "",
};

export default withForm(Login, initialFormState);
