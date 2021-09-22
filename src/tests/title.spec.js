import React from 'react';
import {Title} from '../components/Title';

// Тестирование пропсов
describe('Title component', () => {
  it('should render Title component with props', () => {
    let component = shallow(<Title title={'Title component'}/>)
    expect(component).toMatchSnapshot()
  });

  it('should render Title component without props', () => {
    let component = shallow(<Title/>)
    expect(component).toMatchSnapshot()
  });
})


