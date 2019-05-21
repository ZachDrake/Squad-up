import React from 'react';
import axios from 'axios';
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
  state = {}

  componentDidMount() {
    axios.get('/hello').then(result => {
      console.log(result);
    }).catch(err => {
      if (err) throw err;
    })
  }

  render() {
    return (
      <Router>
        <div>




          <Navbar />
          <LoginModal />
          <SignupModal />

          <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/lfp" component={LFP} />
            <Route exact path="/lfs" component={LFS} />
            <Route exact path="/profile" component={Profile} />
          </Switch>

          <Footer />
        </div>
      </Router>

    )
  }
}
