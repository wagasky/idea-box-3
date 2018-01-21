import React from 'react';
import Header from './Header.js'
import IdeaInput from './IdeaInput.js'
import IdeaDisplay from './IdeaDisplay.js'
// import './App.css'

export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentCards: []
    }

    this.getObjectFromStorage = this.getObjectFromStorage.bind(this);
    this.getCards = this.getCards.bind(this);
    this.storeIdea = this.storeIdea.bind(this);
  }

  componentDidMount () {
    this.getCards();
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

  storeIdea(newIdea) {
    if (!localStorage.cards) {
      let newArray = this.state.currentCards.unshift(newIdea)
      let stringifiedObject = JSON.stringify(this.state.currentCards);

      localStorage.setItem('cards', stringifiedObject);
      this.setState({
        currentCards: newArray
      })
    } else {
      let parsed = this.getObjectFromStorage() 
      let stringifiedObject2 = JSON.stringify(parsed)

      parsed.unshift(newIdea);
      localStorage.setItem('cards', stringifiedObject2)
      this.setState({
        currentCards: parsed
      })
    }
  }

  render() {
      return (
        <div> 
            <Header /> 
            <IdeaInput getCards={this.getCards} storeIdea={this.storeIdea} storeAdditionalIdea={this.storeAdditionalIdea}/> 
            <IdeaDisplay getCards={this.getCards} currentCards={this.state.currentCards} />
        </div> 
      )
    }

}