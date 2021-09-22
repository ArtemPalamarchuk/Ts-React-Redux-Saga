import React from 'react';
import Input from '../components/Input';

const setUpInput = (props) => shallow(<Input {...props}/>)

describe('Input component', () => {
  it('should render input component', () => {
    const component = setUpInput()
    expect(component).toMatchSnapshot( )
  })
})