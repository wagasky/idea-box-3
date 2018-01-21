import React from 'react';
import './IdeaInput.css'

export default class IdeaInput extends React.Component {

  constructor() {
    super();

    this.state = {
      cards: [],
      title: '',
      body: '',
      quality: 'swill'
    }

    
    this.getIdeaTitle = this.getIdeaTitle.bind(this);
    this.getIdeaBody = this.getIdeaBody.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    if (!localStorage.cards) {
      this.state.cards.push({id: Date.now(), title: this.state.title, body: this.state.body, quality: this.state.quality})
      this.storeIdea();
    } else {
      this.storeAdditionalIdea();
    }
  }

  getIdeaTitle(e) {
    console.log(this.state.cards)
    this.setState({
      title: e.target.value,
    })
  }

  getIdeaBody(e) {
    this.setState({
      body: e.target.value,
    })
  }

  getCardsFromStorage() {
    let retrievedObject = localStorage.getItem('cards');
    let parsed = JSON.parse(retrievedObject);
    return parsed;
  }

  storeAdditionalIdea() {
    let additionalIdea = {id: Date.now(), title: this.state.title, body: this.state.body, quality: this.state.quality};
    let parsed = this.getCardsFromStorage()
    parsed.splice(0, 0, additionalIdea);
    let stringifiedObject = JSON.stringify(parsed)
    localStorage.setItem('cards', stringifiedObject)
  }

  storeIdea() {
    
    let stringifiedObject = JSON.stringify(this.state.cards);

    // this.state.cards.push(newIdea);
    localStorage.setItem('cards', stringifiedObject);


  }

  render() {
    return (
      <div id="user-input-container">
        <label htmlFor="IdeaTitleText">Title</label>
        <input 
          id="IdeaTitleText"
          type="text"
          onChange={ this.getIdeaTitle }/>
        <label htmlFor="IdeaBodyText">Body</label>
        <input 
          id="IdeaBodyText"
          type="text"
          onChange={ this.getIdeaBody }/>
        <button 
          onClick={ this.handleButtonClick }>Submit Idea
        </button>
      </div>
    )
  }

}