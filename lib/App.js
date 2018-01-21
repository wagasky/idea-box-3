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
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
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

  handleUpVote(e) {
    console.log('up', this.props)
  }

   handleDownVote(e) {
    console.log('down')
  }

  storeIdea(newIdea) {
    if (!localStorage.cards) {
      let array = []
      array.unshift(newIdea)
      let stringifiedObject = JSON.stringify(array);
      localStorage.setItem('cards', stringifiedObject);
      this.setState({
        currentCards: array
      })
    } else {
      let parsed = this.getObjectFromStorage() 
      parsed.unshift(newIdea);
      let stringifiedObject2 = JSON.stringify(parsed)
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
          <IdeaDisplay getCards={this.getCards} currentCards={this.state.currentCards} upVote={this.handleUpVote} downVote={this.handleDownVote}/>
      </div> 
    )
  }
}