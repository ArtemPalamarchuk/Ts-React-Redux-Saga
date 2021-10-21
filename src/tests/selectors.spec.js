import {appSelectors} from '@src/redux/selectors/app';

const initState = {
  app:{
    data: 'asd'
  }
}

// Тестирование селекторов
describe('Selectors', () => {
  it('reducer ', () => {
    expect(appSelectors.dataSelector(initState)).toEqual('asd')
  });

})
