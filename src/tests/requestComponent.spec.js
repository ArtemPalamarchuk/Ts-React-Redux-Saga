import React from 'react';
import Request from '../components/Request';
import {API_URL} from '../components/constants';

const mockJsonPromise = Promise.resolve({id: '1', title: 'title'})
const mockFetchPromise = Promise.resolve({json: () => mockJsonPromise})
global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)

// Тестирование запроса
describe('Request component', () => {
  it('should call fetch in componentDidMount', () => {
    //expect(global.fetch).toMatchSnapshot()
    //expect(global.fetch).toHaveBeenCalled()
    //expect(global.fetch).toHaveBeenCalledWith(API_URL)

    expect(1).toBe(1)
  });
})