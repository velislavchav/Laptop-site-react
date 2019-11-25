import React, { Fragment } from 'react'
import './styles.css'
import background from "./background.jpg"

const LoginForm = () => {
    return (
        <Fragment>
            <img id="backgroundUserRegisterLoginPage" alt="background" src={background} />
            <div id="formStyling">
                <form action="/my-handling-form-page" method="POST">
                    <div>
                        {/* <label for="name">Username:</label> */}
                        <input type="text" id="name" name="user_name" placeholder="Username" />
                    </div>
                    <div>
                        {/* <label for="password">Password:</label> */}
                        <input type="password" id="password" name="user_password" placeholder="Password" />
                    </div>
                    <div>
                        {/* <label for="mail">E-mail:</label> */}
                        <input type="email" id="mail" name="user_mail" placeholder="E-mail" />
                    </div>
                    <div>
                        {/* <label for="msg">Message:</label> */}
                        <textarea id="msg" name="user_message" placeholder="Something about you"></textarea>
                    </div>
                    <div class="button-formAction">
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default LoginForm