import React, { Fragment, Component } from 'react'
import * as yup from 'yup';
import withForm from '../shared/hocs/withForm'
import { Link } from 'react-router-dom'
import userService from '../shared/helpers/userService';
import { getCookie } from "../shared/helpers/cookieSetter"

import './styles.css'

class EditProfile extends Component {
    state = {}
    usernameOnChangeHandler = this.props.controlChangeHandlerFactory('username');
    emailOnChangeHandler = this.props.controlChangeHandlerFactory('email');
    passwordOnChangeHandler = this.props.controlChangeHandlerFactory('password');
    imageOnChangeHandler = this.props.controlChangeHandlerFactory('image');
    userDescriptionOnChangeHandler = this.props.controlChangeHandlerFactory('userDescription');

    submitHandler = async () => {
        await this.props.runValidations()
        const errors = await this.props.getFormErrorState();
        if (!!errors) { return; }
        // const data = await this.props.getFormState();
        // await userService.register(data)
        // await this.props.history.push('/login');
        // console.log('registered succesfully');
    };

    getFirstControlError = name => {
        const errorState = this.props.getFormErrorState();
        return errorState && errorState[name] && errorState[name][0];
    };

    async componentDidMount() {
        const userID = await atob(getCookie('usrinf'));
        const userFound = await userService.getProfileData(userID);
        await this.setState(userFound)
    }

    render() {
        const usernameError = this.getFirstControlError('username');
        const emailError = this.getFirstControlError('email');
        const imageError = this.getFirstControlError('imageUrl');
        let { username, email, imageUrl, userDescription } = this.state;

        return (
            <Fragment>
                <img id="backgroundUserRegisterLoginPage" alt="background" src="http://eskipaper.com/images/free-dark-wallpaper-1.jpg" />
                <div id="formStyling">
                    <h2 id="titleForm"> Edit profile </h2>
                    <form action="/" method="POST">
                        <div>
                            <span className="inputsDescr"> Previous name: {username}</span><br />
                            <input type="text" name="username" placeholder="new username" onChange={this.usernameOnChangeHandler} />
                            {usernameError && <div className="validateInputs">{usernameError}</div>}
                        </div>
                        <div>
                            <span className="inputsDescr"> Previous email: {email}</span><br />
                            <input type="email" name="email" placeholder="new e-mail" onChange={this.emailOnChangeHandler} />
                            {emailError && <div className="validateInputs">{emailError}</div>}
                        </div>
                        <div>
                            <span className="inputsDescr"> Previous image: {imageUrl}</span><br />
                            <input type="text" name="imageUrl" placeholder="new image url" onChange={this.imageOnChangeHandler} />
                            {imageError && <div className="validateInputs">{imageError}</div>}
                        </div>
                        <div>
                            <textarea name="userDescription" placeholder="Something about you" onChange={this.userDescriptionOnChangeHandler}>{userDescription}</textarea>
                        </div>
                        <div className="button-formAction">
                            <button type="button" onClick={this.submitHandler}> EDIT </button>
                            <Link to="/profile"><button type="button">BACK</button></Link>
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

export default withForm(EditProfile, initialFormState, schema)
