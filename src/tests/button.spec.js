import Button from '../components/Button';
import React from 'react';

// Тестирование клика
describe('Button component', () => {
  it('should call onclick', () => {
    const mockCallBack = jest.fn()
    const component = shallow(<Button onclick={mockCallBack}/>)
    expect(mockCallBack.mock.calls.length).toEqual(0)
    component.find('.btn').simulate('click')
    expect(mockCallBack.mock.calls.length).toEqual(1)
  });
})