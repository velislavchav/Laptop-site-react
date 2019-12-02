import React, { Fragment, Component } from 'react'
import * as yup from 'yup';
import withForm from '../shared/hocs/withForm'
import userService from '../shared/helpers/userService';
import './styles.css'

class Register extends Component {
    usernameOnChangeHandler = this.props.controlChangeHandlerFactory('username');
    emailOnChangeHandler = this.props.controlChangeHandlerFactory('email');
    passwordOnChangeHandler = this.props.controlChangeHandlerFactory('password');
    rePasswordOnChangeHandler = this.props.controlChangeHandlerFactory('repassword');
    userDescriptionOnChangeHandler = this.props.controlChangeHandlerFactory('userDescription');

    submitHandler = () => {
        this.props.runValidations()
        const errors = this.props.getFormErrorState();
        if (!!errors) { return; }
        const data = this.props.getFormState();
        userService.register(data).then(() => {
            this.props.history.push('/login');
        });
        console.log('registered succesfully');
    };

    getFirstControlError = name => {
        const errorState = this.props.getFormErrorState();
        return errorState && errorState[name] && errorState[name][0];
    };


    render() {
        const usernameError = this.getFirstControlError('username');
        const emailError = this.getFirstControlError('email');
        const passwordError = this.getFirstControlError('password');
        const rePasswordError = this.getFirstControlError('repassword');

        return (
            <Fragment>
                <img id="backgroundUserRegisterLoginPage" alt="background" src="http://eskipaper.com/images/free-dark-wallpaper-1.jpg" />
                <div id="formStyling">
                    <h2 id="titleForm"> Register page </h2>
                    <form action="/" method="POST">
                        <div>
                            <input type="text" name="username" placeholder="Username" onChange={this.usernameOnChangeHandler} />
                            {usernameError && <div className="validateInputs">{usernameError}</div>}
                        </div>
                        <div>
                            <input type="email" name="email" placeholder="E-mail" onChange={this.emailOnChangeHandler} />
                            {emailError && <div className="validateInputs">{emailError}</div>}
                        </div>
                        <div>
                            <input type="password" name="password" placeholder="Password" onChange={this.passwordOnChangeHandler} />
                            {passwordError && <div className="validateInputs">{passwordError}</div>}
                        </div>
                        <div>
                            <input type="password" name="repassword" placeholder="Repeat password" onChange={this.rePasswordOnChangeHandler} />
                            {rePasswordError && <div className="validateInputs">{rePasswordError}</div>}
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
    repassword: "",
    userDescription: "",
};

const schema = yup.object({
    username: yup.string('Username shoud be a string')
        .required('Username is required')
        .min(4, 'Username should be more than 4 chars'),

    password: yup.string('Password must be a string')
        .required('Password is required')
        .min(6, 'Password must be more than 6 chars'),

    email: yup.string('Email shoud be valid')
        .required('Email is required')
        .min(4, 'Email should be more than 4 chars'),

    repassword: yup.string('Password must be a string')
    // .oneOf([yup.ref('password'), ''], 'Passwords don\'t match')
    // .required('Password is required')
    // .min(6, 'Password must be more than 6 chars')
    ,
    userDescription: yup.string('Description must be a string')

});

export default withForm(Register, initialFormState, schema)
