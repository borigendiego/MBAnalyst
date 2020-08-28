import React from 'react';

const ExploreItem = (props) => {
  return (
      <div id={props.id} className={'explore-container'}>
          <img src={props.image} alt={'logo'} className={'explore-logo'}/>
          <p className={'explore-text'}>{props.text}</p>
      </div>
  )
};

export default ExploreItem