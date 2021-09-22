import React from 'react';

export const Post = ({title = '', description}) => {


  return (
    <li className={'post-wrap'}>
      <h1>{title}</h1>
      <p>{description}</p>
      <a href="https://google.com.ua">Link to</a>
      <span>
        {title ? new Date().toString(): '123'}
      </span>
    </li>
  )

}