import React from 'react';
import './IdeaInput.css'

export default class IdeaInput extends React.Component {

  constructor() {
    super();

    this.state = {
      cards: [],
      title: '',
      body: ''
    }

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.getIdeaTitle = this.getIdeaTitle.bind(this);
    this.getIdeaBody = this.getIdeaBody.bind(this);
  }

  handleButtonClick() {
    this.storeIdea();
  }

  getIdeaTitle(e) {
    this.setState({
      title: e.target.value,
    })
  }

  getIdeaBody(e) {
    this.setState({
      body: e.target.value,
    })
  }

  storeIdea() {
    let newIdea = {id: Date.now(), title: this.state.title, body: this.state.body};
    this.state.cards.push(newIdea)
    console.log(this.state.cards)
    var stringifiedObject = JSON.stringify(this.state.cards);
    localStorage.setItem( 'cards', stringifiedObject);
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