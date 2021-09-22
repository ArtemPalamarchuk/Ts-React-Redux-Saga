import React from 'react';

export const Title = ({title = 'Default title'}) => {

  return (
    <h1 className={'title'}>
      {title}
    </h1>
  )

}