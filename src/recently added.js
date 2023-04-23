import React from 'react'

function Recentlyadded(props) {
    
  return (
    <div className='recentlyadded'>
      <p>{props.title}</p>
      <img src={props.image} alt='okay'></img>

    </div>
  )
}

export default Recentlyadded;