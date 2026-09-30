import React from 'react'

function  Card() {

  const yourName = "Savithri"
  const yourAim = "To become a successful software developer"
  const funFact = "I enjoy learning new things and improving my skills"
  return (

    <div
      style={{
        dispaly: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
 
      }}>
<div
    style={{
          width: '700px',
          padding: '60px 40px',
          textAlign: 'center',
          backgroundColor: '#f8f8f8',
          borderRadius: '18px',
          boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)'
    }}>
      <h1>{yourName}</h1>
      <h2>{yourAim}</h2>
      <p>{funFact}</p>

    </div>
    </div>
  )
}

export default Card
