import React from 'react';

function MenuItem({image, name, price, quatity}) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})`}} ></div>
      <h1> {name} </h1>
      <p> Piece{quatity}</p>
      <p> Rs.{price} </p>
    </div>
  )
}

export default MenuItem;
