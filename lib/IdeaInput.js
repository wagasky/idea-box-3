import React from 'react';
import './IdeaInput.css'

export default class IdeaInput extends React.Component {

  constructor() {
    super();

    this.state = {
      title: '',
      body: ''
    }

    this.getIdeaTitle = this.getIdeaTitle.bind(this);
    this.getIdeaBody = this.getIdeaBody.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    let newIdea = {
      id: Date.now(), 
      title: this.state.title, 
      body: this.state.body, 
      quality: 'swill'
    }
    this.props.storeIdea(newIdea)
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