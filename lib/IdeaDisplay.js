import React from 'react'
import Card from './Card.js';

export default function IdeaDisplay(props) {

  return (
    <div className="IdeaList">
      <h2>cards</h2>
      <div className="CardContainer">
        {
          props.currentCards &&
           props.currentCards.map( (card, index) => <Card key={index} card={props.currentCards[index]} upVote={props.upVote} downVote={props.downVote} />)
        }
      </div>
    </div>
  )
}
