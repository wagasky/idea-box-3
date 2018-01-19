import React from 'react';
import Header from './Header.js'
import IdeaInput from './IdeaInput.js'
import IdeaDisplay from './IdeaDisplay.js'
// import './App.css'

export default class App extends React.Component {

  constructor() {
    super();

  }

  componentDidMount () {
    if (this.getObjectFromStorage()) {
      let displayCards = this.getObjectFromStorage();

      console.log('cards from storage: ', displayCards)
    } 
  }

  getObjectFromStorage() {
    let retrievedObject = localStorage.getItem('cards');
    let parsedObject = JSON.parse(retrievedObject);
    return parsedObject;
  }

  render() {
    this.getObjectFromStorage()
    return (
      <div> 
          <Header /> 
          <IdeaInput /> 
          <IdeaDisplay />
      </div> 
    )
  }
}