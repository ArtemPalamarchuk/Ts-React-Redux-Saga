import React from 'react';

const Input = ({onChange, onKeyPress, value}) =>
  <div className={'inputWrapper'}>
    <i className={'fas fa-search'}/>
    <input
      className={'input'}
      placeholder={'Click to search'}
      onChange={onChange}
      onKeyPress={onKeyPress}
      value={value}
    />
  </div>

export default Input