import React from 'react';
import axios from 'axios';
import './App.css';

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
        yay
      </div>
    )
  }
}
