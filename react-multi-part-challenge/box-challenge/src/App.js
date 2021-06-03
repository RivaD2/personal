import React, { Component } from 'react'
import GridOfBoxes from './components/GridOfBoxes';
import './App.css';


export default class App extends Component {
  state = {
    color:'green',
    selectedBox: true
  }

  render() {
    return (
      <div className="App-container">
        <GridOfBoxes />
      </div>
    )
  }
}

