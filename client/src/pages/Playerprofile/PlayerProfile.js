import React from "react";

import "./profile.css"
import Jumbo from "./jumbo/Jumbo"
import Frame from "./frame/Frame"
import Axios from "axios";

class Profile extends React.Component {
    state = {
        squadInfo: []
    }

    componentDidMount() {

        console.log(this.props.match.params)
        Axios.get(`/members/${this.props.match.params[0]}`)
            .then(results => {
                console.log(results)
                let squadInfo = results;
                console.log(results)
                this.setState({ squadInfo });
            })
    }

    render() {
        return (
            <div className="style">
                <div >
                    <Jumbo info={this.state.squadInfo} />
                    <Frame info={this.state.squadInfo} />
                </div>

            </div>
        )
    }

}



export default Profile;