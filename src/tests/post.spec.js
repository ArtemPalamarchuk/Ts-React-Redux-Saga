import React from 'react';
import {Post} from '../components/Post';

const setUp = (props) => shallow(<Post {...props}/>)

// Тестирование отрисовки
describe('Post component', () => {
  let component;
  beforeEach(() => {
    component = setUp()
  })

  it('should contain post-wrapper', () => {
    const wrapper = component.find('.post-wrap')
    expect(wrapper.length).toEqual(1)
  });

  it('should contain link element', () => {
    const link = component.find('a')
    expect(link.length).toEqual(1)
  });
})

// Тестирование снимков
describe('Post component snapshot', () => {
  let component;
  beforeEach(() => {
    component = setUp()
  })

  it('Should render post component', () => {
    expect(component).toMatchSnapshot()
  });
})
