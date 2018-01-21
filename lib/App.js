import React from 'react';
import Header from './Header.js'
import IdeaInput from './IdeaInput.js'
import IdeaDisplay from './IdeaDisplay.js'
// import './App.css'

export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentCards: null
    }

    this.getObjectFromStorage = this.getObjectFromStorage.bind(this);
    this.getCards = this.getCards.bind(this);
  }

  componentDidMount () {
    if (localStorage.getItem('cards')) {
      this.getCards()
    }
  }

  getObjectFromStorage() {
    let retrievedObject = localStorage.getItem('cards');
    let parsedObject = JSON.parse(retrievedObject);
    return parsedObject;
  }

  getCards() {
    let cardData = this.getObjectFromStorage()
    this.setState({
      currentCards: cardData
    });
  }

  render() {
    if(this.state.currentCards === null) {
      return (
        <div>
          <Header /> 
          <IdeaInput /> 
        </div>
      )
    } else if (this.state.currentCards)  {
      return (
        <div> 
            <Header /> 
            <IdeaInput getCards={this.getCards} /> 
            <IdeaDisplay getCards={this.getCards} currentCards={this.state.currentCards} />
        </div> 
      )
    }
  }
}