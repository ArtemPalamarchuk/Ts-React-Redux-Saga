import Posts from '../components/Posts';
import React from 'react';

const setUpPosts = (props) => shallow(<Posts {...props}/>) //render, mount

// Тестирование снимков
describe('Posts component snapshot', () => {
  let component;
  beforeEach(() => {
    component = setUpPosts()
  })

  it('should contain post-wrapper', () => {
    expect(component).toMatchSnapshot()
  });
})

// Тестирование Событий
describe('Posts component', () => {
  const DEFAULT_PAGE = 10
  let component;
  let instance;

  beforeEach(() => {
    component = setUpPosts()
    instance = component.instance()
  })

  it('should render post-wrapper', () => {
    expect(component).toMatchSnapshot()
  });

  describe('Posts handlers', () => {
    it('should handle search input value', () => {
      expect(component.state().searchQuery).toBe('')
      instance.handleInputChange({ target: {value: 'test'}});
      expect(component.state().searchQuery).toBe('test')
    });

    it('should handle search input value', () => {
      expect(component.state().hitsPerPage).toBe(20)
      instance.handleHitsChange({ target: {value: String(DEFAULT_PAGE)}});
       expect(component.state().hitsPerPage).toBe(DEFAULT_PAGE)
    });

    it('should handle change page if Enter clicked', () => {
      instance.setState({ page: DEFAULT_PAGE });
      instance.getSearch({ key: 'Enter' });
      expect(component.state().page).toBe(0)
    });

    it('should handle change page if not Enter clicked', () => {
      instance.setState({ page: DEFAULT_PAGE });
      instance.getSearch({ key: 'a' });
      expect(component.state().page).toBe(DEFAULT_PAGE)
    });
  })
})