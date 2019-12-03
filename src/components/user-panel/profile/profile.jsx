import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { getCookie } from "../../shared/helpers/cookieSetter"
import userServices from "../../shared/helpers/userService"
import "./profileStyles.css"

class Profile extends Component {
    state = {}
    async componentDidMount() {
        const userID = await atob(getCookie('usrinf'));
        const userFound = await userServices.getProfileData(userID);
        await this.setState(userFound)
    }

    render() {
        return (
            <Fragment>
                <div id="profilePageTitle"><h1> Profile page </h1></div>
                <div className="profilePictureWrapper">
                    <img id="profileFrame"
                        src="https://em.wattpad.com/8f19b412f2223afe4288ed0904120a48b7a38ce1/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5650722d38464e2d744a515349673d3d2d3234323931353831302e313434336539633161633764383437652e6a7067?s=fit&w=720&h=720"
                        alt="profile" />
                </div>
                <div className="profileDescription">
                    <h3> Username: {this.state.username} </h3>
                    <h3> Email: {this.state.email} </h3>
                    <h3> About me: {this.state.userDescription} </h3>
                </div>
                <div><Link to="/"><button>Edit my profile</button></Link>
                    <Link to="/products"><button>See my offers</button></Link></div>
            </Fragment>
        )
    }
}

export default Profile;