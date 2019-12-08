import React, { Fragment } from 'react'
import './about.css';
import GoogleMap from "./GoogleMap"
import callImage from './call.png'
import mailImage from './mail.png'
import officeImage from './office.png'

const About = () => {
    return (
        <Fragment>
            <h1 className="AboutUsHeader"> About us</h1>
            <table className="AboutUsInfo">
                <tbody>
                    <tr>
                        <td><img src={callImage} alt="Call us" title="Call us" className="ConntactUsIcons" /></td>
                        <td><img src={mailImage} alt="Email" title="E-mail" className="ConntactUsIcons" /></td>
                        <td><img src={officeImage} alt="Visit us" title="Visit us" className="ConntactUsIcons" /></td>
                    </tr>
                    <tr>
                        <td><h2 className="AboutUsHeader2">PHONE:</h2></td>
                        <td><h2 className="AboutUsHeader2">EMAIL:</h2></td>
                        <td><h2 className="AboutUsHeader2">VISIT US:</h2></td>
                    </tr>
                    <tr>
                        <td>
                            <p className="ConntactUsNEA">Bulgaria: +359 87 164 6134</p>
                        </td>
                        <td>
                            <p className="ConntactUsNEA">Laptopshop@gmail.com</p>
                        </td>
                        <td>
                            <p className="ConntactUsNEA"> bul. Bulgaria 138 - Smolyan, Bulgaria </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <GoogleMap />
        </Fragment>
    )
}


export default About