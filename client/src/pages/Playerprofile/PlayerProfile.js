import React from "react";

import "./profile.css"
import Jumbo from "./jumbo/Jumbo"
import Frame from "./frame/Frame"
import Axios from "axios";

class Profile extends React.Component {
    state = {
        memberInfo: {
            squads: []
        }
    }

    componentDidMount() {
        Axios.get(`/members/profile/${this.props.match.params[0]}`)
            .then(results => {
               
                let memberInfo = results.data;
                console.log(memberInfo)
                this.setState({ memberInfo });
            })
    }

    render() {
        return (
            <div className="style">
                <div >
                    <Jumbo info={this.state.memberInfo} />
                    <Frame info={this.state.memberInfo} />
                </div>

            </div>
        )
    }

}



export default Profile;