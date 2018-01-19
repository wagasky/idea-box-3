import React from 'react'
import Card from './Card.js';

export default function IdeaDisplay(props) {
  console.log('props:', props)


  return (
    <div className="IdeaList">
      <h2>Box of Ideas goes here</h2>
      <div className="CardContainer">
        <Card />
      </div>
    </div>
  )
}


 // props.card.map(( (card, index) => <Card key={index}/> ))