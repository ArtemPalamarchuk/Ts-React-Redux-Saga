import React from 'react';
import {render} from 'react-dom'
import App from './components/App';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const Init = () => {

  render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
  )
}

document.addEventListener('DOMContentLoaded', Init)