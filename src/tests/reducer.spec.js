import {appReducer, initAppState} from '../redux/reducers/app';
import {appActions} from '../redux/actions/app';

// Тестирование редюсеров
describe('appReducer', () => {
  it('reducer ', () => {
    expect(appReducer(initAppState, appActions.testAction)).toEqual({
      ...initAppState,
      data: 'initial data value'
    })
  });

  it('reducer with payload ', () => {
    expect(appReducer(initAppState, appActions.testActionWithPayload({a: 10, b: 15}))).toEqual({
      ...initAppState,
      obj:{
        a: 10,
        b: 15,
      }
    })
  });
})