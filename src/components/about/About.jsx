import React, { Fragment } from 'react'
import './about.css';
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
                            <p className="ConntactUsNEA">+359 87 261 0628</p>
                        </td>
                        <td>
                            <p className="ConntactUsNEA">Laptopbg@abv.bg</p>
                            <p className="ConntactUsNEA">Laptopbg@gmail.com</p>
                        </td>
                        <td>
                            <p className="ConntactUsNEA"> Smolyan- 48 Hadji Dimitar Street </p>
                            <p className="ConntactUsNEA">Sofia- 15 Okolchitsa Street </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
}


export default About