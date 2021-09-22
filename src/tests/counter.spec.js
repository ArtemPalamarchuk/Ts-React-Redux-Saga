import React from 'react';
import Counter from '../components/Counter';

const setUpCounter = () => shallow(<Counter/>)

// Тестирование кликов
describe('Counter component', () => {
  let component;
  let instannce;
  beforeEach(() => {
    component = setUpCounter()
    instannce = component.instance()
  })

  it('should render counter component ', () => {
    expect(component).toMatchSnapshot()
  });

  describe('Counter component', () => {
    it('should change count', () => {
      const btn = component.find('.plusOneBtn')
      btn.simulate('click')
      //expect(component).toMatchSnapshot()
      expect(component.state().count).toBe(1)
    });

    it('should change count to 10', () => {
      const btn = component.find('.resetBtn')
      btn.simulate('click')
      expect(component.state().count).toBe(10)
    });

    it('should change count to custom value', () => {
      instannce.handleReset(25)
      expect(component.state().count).toBe(25)
    });
  })
});