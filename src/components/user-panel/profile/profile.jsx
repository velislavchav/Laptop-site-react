import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { getCookie } from "../../shared/helpers/cookieSetter"
import userService from "../../shared/helpers/userService"
import "./profileStyles.css"

class Profile extends Component {
    state = {}
    async componentDidMount() {
        const userID = await atob(getCookie('usrinf'));
        const userFound = await userService.getProfileData(userID);
        await this.setState(userFound)
    }

    render() {
        return (
            <Fragment>
                <div id="profilePageTitle"><h1> Profile page </h1></div>
                <hr />
                <div className="profilePictureWrapper">
                    <img className="profileFrame"
                        src={this.state.imageUrl}
                        alt="profile" />
                </div>
                <div className="profileDescription">
                    <h2 id="tableProfileTitle">Profile </h2>
                    <table border="1">
                        <tbody>
                            <tr>
                                <td className="specsTableData">USERNAME</td>
                                <td>{this.state.username}</td>
                            </tr>
                            <tr>
                                <td className="specsTableData">EMAIL</td>
                                <td>{this.state.email}</td>
                            </tr>
                            <tr>
                                <td className="specsTableData">ABOUT ME</td>
                                <td>{this.state.userDescription}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div id="btnEditProfile">
                        <Link to="/edit-profile"><button>EDIT PROFILE</button></Link>
                    </div>
                </div>

                {/* <Link to="/my-products"><button>See my offers</button></Link> */}
            </Fragment>
        )
    }
}

export default Profile;