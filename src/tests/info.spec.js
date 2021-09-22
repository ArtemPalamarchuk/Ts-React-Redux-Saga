/**
 * @jest-environment jsdom
 */

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

import React from 'react';
import Info from '../components/Info';

const setUp = () => shallow(<Info/>)

const componentDidMountSpy = jest.spyOn(Info.prototype, 'componentDidMount');
const componentDidUpdateSpy = jest.spyOn(Info.prototype, 'componentDidUpdate');
const componentWillUnmountSpy = jest.spyOn(Info.prototype, 'componentWillUnmount');

// Тестирование жизненных циклов
describe('Info component', () => {
  let component;

  beforeEach(() => {
    jest.spyOn(window, 'addEventListener');
    jest.spyOn(window, 'removeEventListener');
    component = setUp();
  })

  // afterEach(() => {
  //   window.addEventListener.mockRestore()
  //   window.removeEventListener.mockRestore()
  // })

  it('should render info component', () => {
    expect(component).toMatchSnapshot()
  });

  describe('LifeCycle methods', () => {
    it('should call componentDidMount once',  () => {
      expect(componentDidMountSpy).toHaveBeenCalledTimes(1)
    });

    it('should not call componentWillUnmount when component just mounted',  () => {
      expect(componentDidMountSpy).toHaveBeenCalledTimes(1)
      expect(componentWillUnmountSpy).toHaveBeenCalledTimes(0)
    });

    it('should call componentDidUpdate',  () => {
      component.setProps()
      expect(componentDidUpdateSpy).toHaveBeenCalled()
    });

    it('should call componentDidMount',  () => {
      component.unmount()
      expect(componentDidMountSpy).toHaveBeenCalledTimes(1)
    });
  })
})