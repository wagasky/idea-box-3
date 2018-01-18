import React from 'react';
import Header from './Header.js'
import IdeaInput from './IdeaInput.js'
// import './App.css'

export default class App extends React.Component {

  constructor() {
    super();

  }

  render() {
    return (
      <div> 
          <Header /> 
          <IdeaInput /> 
      </div> 
    )
  }
}