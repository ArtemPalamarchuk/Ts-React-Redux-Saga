import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {appSelectors} from '../redux/selectors/app';
import Posts from '../components/Posts';
import {Title} from '../components/Title';
import RequestComponent from '../components/Request';
import {appActions} from '../redux/actions/app';


const App = ({getData, testActionWithPayload, data}) => {
  useEffect(() => {
    getData();
  }, [])
  console.log(data, 'data--------------------------------------------');
  return (
    <>
      <RequestComponent/>
      <Title title={'Title component'}/>
      <Posts/>
      <button onClick={() =>testActionWithPayload({a:15, b: 33})}>Click</button>
    </>
  )
}


const mapStateToProps = (state) => ({
  data: appSelectors.dataSelector(state),
});

const mapDispatchToProps = ({
  getData: appActions.testAction,
  testActionWithPayload: appActions.testActionWithPayload,
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
