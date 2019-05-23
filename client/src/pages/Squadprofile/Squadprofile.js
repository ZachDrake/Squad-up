import React from "react";

import "./squadprofile.css"
import Jumbo from "./jumbo/Jumbo"
import Frame from "./frame/Frame"
import Axios from "axios";

class Squadprofile extends React.Component {
    state = {
        squadInfo: []
    }

    componentDidMount() {

        // console.log(this.props.match.params[0])
        Axios.get(`/squads/${this.props.match.params[0]}`)
            .then(results => {

                let squadInfo = results.data;
                // console.log(results.data);
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



export default Squadprofile;