import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='tc grow hover-bg-light-green br3 pa3 ma2 dib bw2 shadow-5 w5 '>
      <img alt='robots' src={`https://robohash.org/${id}?size=100x100`} />
      <div>
        <h2 className='truncate'>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
