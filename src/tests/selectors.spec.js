import {appReducer, initAppState} from '../redux/reducers/app';
import {appSelectors} from '@src/redux/selectors/app';

const initState = {
  data: 'asd'
}

// Тестирование селекторов
describe('Selectors', () => {
  it('reducer ', () => {
    expect(appSelectors.dataSelector(initState)).toEqual('asd')
  });

})
