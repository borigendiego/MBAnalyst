import React from 'react';

const ExploreItem = (props) => {
  return (
      <div className={'explore-container'}>
          <div className={'hexagon'}>
              <img src={props.image} alt={'logo'} className={'explore-logo'}/>
          </div>
          <p className={'explore-text'}>{props.text}</p>
      </div>
  )
};

export default ExploreItem