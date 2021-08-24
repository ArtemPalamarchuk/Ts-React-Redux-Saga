import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {appStore} from '../redux/selectors/app';


const App = ({getData}) => {
  useEffect(() => {
    getData();
  }, [])

  return (
    <div>App Content</div>
  )
}


const mapStateToProps = (state) => ({
  data: appStore.data(state),
});

const mapDispatchToProps = ({
  getData: () => ({type: 'A'}),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
