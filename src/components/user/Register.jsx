import React, { Fragment, Component } from 'react'
import * as yup from 'yup';
import withForm from '../shared/hocs/withForm'
import userService from '../shared/helpers/userService';
import './styles.css'

class Register extends Component {
    state = {
        isUserWithThatName: false,
    }
    usernameOnChangeHandler = this.props.controlChangeHandlerFactory('username');
    emailOnChangeHandler = this.props.controlChangeHandlerFactory('email');
    passwordOnChangeHandler = this.props.controlChangeHandlerFactory('password');
    imageOnChangeHandler = this.props.controlChangeHandlerFactory('imageUrl');
    userDescriptionOnChangeHandler = this.props.controlChangeHandlerFactory('userDescription');

    submitHandler = async () => {
        await this.props.runValidations()
        const errors = await this.props.getFormErrorState();
        if (!!errors) { return; }
        const data = await this.props.getFormState();
        if (data.imageUrl === "") {
            data.imageUrl = "http://pngimages.net/sites/default/files/anonymous-user-png-image-83861.png"
        }
        const isValid = await userService.register(data)
        if (isValid !== "UserAlreadyExists") {
            await this.props.history.push('/login');
        } else {
            this.setState({ isUserWithThatName: true })
        }
    };

    getFirstControlError = name => {
        const errorState = this.props.getFormErrorState();
        return errorState && errorState[name] && errorState[name][0];
    };

    render() {
        const usernameError = this.getFirstControlError('username');
        const emailError = this.getFirstControlError('email');
        const passwordError = this.getFirstControlError('password');
        const imageError = this.getFirstControlError('imageUrl');
        const isUsernameTaken = this.state.isUserWithThatName;

        return (
            <Fragment>
                <img id="backgroundUserRegisterLoginPage" alt="background" src="http://eskipaper.com/images/free-dark-wallpaper-1.jpg" />
                <div id="formStyling">
                    <h2 id="titleForm"> Register page </h2>
                    <span className="inputsDescr"> Only inputs with "*" are required</span>
                    <form action="/" method="POST">
                        {isUsernameTaken && <div className="validateInputs"> Username already taken. Change it and try again.</div>}
                        <div>
                            <input type="text" name="username" placeholder="Username*" onChange={this.usernameOnChangeHandler} />
                            {usernameError && <div className="validateInputs">{usernameError}</div>}
                        </div>
                        <div>
                            <input type="email" name="email" placeholder="E-mail*" onChange={this.emailOnChangeHandler} />
                            {emailError && <div className="validateInputs">{emailError}</div>}
                        </div>
                        <div>
                            <input type="password" name="password" placeholder="Password*" onChange={this.passwordOnChangeHandler} />
                            {passwordError && <div className="validateInputs">{passwordError}</div>}
                        </div>
                        <div>
                            <input type="text" name="imageUrl" placeholder="Image url" onChange={this.imageOnChangeHandler} />
                            {imageError && <div className="validateInputs">{imageError}</div>}
                        </div>
                        <div>
                            <textarea name="userDescription" placeholder="Something about you" onChange={this.userDescriptionOnChangeHandler}></textarea>
                        </div>
                        <div className="button-formAction">
                            <button type="button" onClick={this.submitHandler}>Register</button>
                        </div>
                    </form>
                </div>
            </Fragment >
        )
    }
}

const initialFormState = {
    username: "",
    email: "",
    password: "",
    imageUrl: "http://pngimages.net/sites/default/files/anonymous-user-png-image-83861.png",
    userDescription: "No description yet.",
};

const schema = yup.object({
    username: yup.string('Username shoud be a string')
        .required('Username is required')
        .min(4, 'Username should be more than 4 chars'),

    password: yup.string('Password must be a string')
        .required('Password is required')
        .min(6, 'Password must be more than 6 chars'),

    email: yup.string('Email shoud be string')
        .required('Email is required')
        .min(4, 'Email should be more than 4 chars'),

    imageUrl: yup.string('Image shoud be a string')
        .min(8, 'Image should be more than 8 chars')
        .default('http://pngimages.net/sites/default/files/anonymous-user-png-image-83861.png'),

    userDescription: yup.string('Description must be a string')
        .default('No description yet.')
});

export default withForm(Register, initialFormState, schema)
