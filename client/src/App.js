import React from 'react';
import axios from 'axios';
import './App.css';
import Navbar from "./components/navbar/Navbar"
import LFS from "./pages/LFS/Lfs"
import Home from "./pages/Home/Home"
import MemberProfile from "./pages/Playerprofile/PlayerProfile"
import Footer from "./components/Footer/Footer"
import Squadprofile from "./pages/Squadprofile/Squadprofile"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginModal from "./components/LoginModal/LoginModal";
import SignupModal from "./components/LoginModal/SignupModal";
import Createsquad from "./pages/createsquad/Createsquad"

import LFP from "./pages/LFP/Lfp"

    //   function getCookie(c_name) {
        
    //     var i, x, y, ARRcookies = document.cookie.split(";");
    //     for (i = 0; i < ARRcookies.length; i++) {
    //         x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
    //         y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
    //         x = x.replace(/^\s+|\s+$/g, "");
    //         if (x === c_name) {
    //             return unescape(y);
    //         }
    //     }
    // }
    

export default class App extends React.Component {
  state = {
    squads: [],
    members: [],

  }

  

  
  componentDidMount() {
    axios.get('/squads/all')
      .then(result => {
        let squads = result.data;
        this.setState({ squads })
      }).catch(err => {
        if (err) throw err;
      });
      
      axios.get('/members/all')
      .then(result => {
        let members = result.data;
        this.setState({ members })
      }).catch(err => {
        if (err) throw err;
      });
      
   
    }
    
    
    render() {
    console.log(document);
   
    return (
      <Router>
        <div>
          <Navbar />
          <LoginModal />
          <SignupModal />

          <Switch>

            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route exact path="/createsquad" render={(props) => <Createsquad {...props} />} />
            <Route exact path="/squadprofile/*" render={(props) => <Squadprofile {...props} />} />
            <Route exact path="/lfp" render={(props) => <LFP members={this.state.members} {...props} />} />
            <Route exact path="/lfs" render={(props) => <LFS squads={this.state.squads} {...props} />} />
            <Route exact path="/members/*" render={(props) => <MemberProfile {...props} />} />

          </Switch>

          <Footer />
        </div>
      </Router>

    )
  }
}

