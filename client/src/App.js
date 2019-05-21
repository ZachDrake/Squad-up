import React from 'react';
// import axios from 'axios';
import './App.css';
import Navbar from "./components/navbar/Navbar"
import LFS from "./pages/LFS/Lfs"
import Home from "./pages/Home/Home"
import Profile from "./pages/Profile/Profile"
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginModal from "./components/LoginModal/LoginModal";
import SignupModal from "./components/LoginModal/SignupModal";
import LFP from "./pages/LFP/Lfp"

export default class App extends React.Component {
  state = {
    squads: [],
    members: [],

  }

  // componentDidMount() {
  //   axios.get('/squads/all')
  //   .then(result => {
  //      console.log(result);
  //     let squads = result.data;
  //     this.setState({ squads })
  //   }).catch(err => {
  //     if (err) throw err;
  //   });

  //   axios.get('/members/all')
  //   .then(result => {
  //     let members = result.data;
  //     this.setState({ members })
  //   }).catch(err => {
  //     if (err) throw err;
  //   });
  // }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <LoginModal />
          <SignupModal />

          <Switch>
            <Route exact path="/" render={(props) => <Home {...props}/>} />
            <Route exact path="/lfp" render={(props) => <LFP members={this.state.members} {...props}/>} />
            <Route exact path="/lfs" render={(props) => <LFS squads={this.state.squads} {...props}/>} />
            <Route exact path="/profile" render={(props) => <Profile {...props}/>} />
          </Switch>

          <Footer />
        </div>
      </Router>

    )
  }
}
