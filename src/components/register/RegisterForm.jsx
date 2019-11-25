import React from 'react'
import './registerStyles.css'

const RegisterForm = () => {
    return (
        <div className="registerPanel">
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
                    <div class="buttonRegister">
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default RegisterForm