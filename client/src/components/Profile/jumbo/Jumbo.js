import React from 'react';

function Jumbo() {

    const jumboStyle = {
        paddingBottom: "100px",
        marginTop: "10vh"
    }


    return (

        <div className="container">
            <div class="col s12 m7">
                <div class="card horizontal" style={jumboStyle}>
                    <div class="card-stacked">
                        <div class="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    );
}


export default Jumbo;