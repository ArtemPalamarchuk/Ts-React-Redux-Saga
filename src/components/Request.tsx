import React, {Component} from 'react';
import {API_URL} from '../components/constants';

class RequestComponent extends Component {
  state = {
    data: {
      title: ''
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData(){
    fetch(API_URL)
      .then(res => res.json())
      .then((result) => this.setDate(result))
  }

  setDate(data){
    this.setState({data})
  }

  render() {
    console.log(this.state.data.title, 'this.state.data.title');
    return (
      <div>
        {this.state.data.title}
      </div>
    );
  }
}

export default RequestComponent;