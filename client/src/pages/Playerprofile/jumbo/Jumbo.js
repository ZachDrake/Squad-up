import React from 'react';

function Jumbo(props) {

    const jumboStyle = {
        paddingBottom: "100px",
        marginTop: "10vh"
    }


    return (

        <div className="container">
            <div className="col s12 m7">
                <div className="card horizontal" style={jumboStyle}>
                    <div className="card-stacked">
                        <div className="card-content">
                            {/* <p>{props.info.description}</p> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}


export default Jumbo;