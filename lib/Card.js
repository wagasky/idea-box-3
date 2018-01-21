import React from 'react';

export default class Card extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {
          <h1>{this.props.card.title}</h1>
        }
      </div>

    )
  }
}