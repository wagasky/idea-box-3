import React from 'react';

export default class Card extends React.Component {
  constructor() {
    super();
  }



  render() {
    return (
      <div>
        {
          <span>
            <h2>{this.props.card.title}</h2>
            <h2>{this.props.card.body}</h2>
            <h3>quality: {this.props.card.quality}</h3>
            <button onClick={this.props.upVote}>Upvote</button>
            <button onClick={this.props.downVote}>Downvote</button>
          </span>
        }
      </div>

    )
  }
}