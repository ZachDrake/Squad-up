import React from 'react';
import axios from 'axios';
import './App.css';
import Lfs from "./components/LFS/Lfs"
import Footer from "./components/Footer/Footer"

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
      <div>
        <Lfs />
        <Footer />
      </div>
    )
  }
}
