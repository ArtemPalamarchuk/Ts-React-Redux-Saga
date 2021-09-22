/*
import React from 'react';
import {Post} from '../components/Post';
import {NEWS} from '../components/constants';

export const Posts = () => {



  return (
    <ul>
      {NEWS.map(({title, description}) =>
        <Post
          title={title}
          description={description}
          key={Math.random()}
        />
      )}
    </ul>
  )
}*/

import React, {Component} from 'react';
import {Title} from '../components/Title';
import Select from '../components/Select';
import {HITS} from '../components/constants';
import Input from '../components/Input';

class Posts extends Component {
  state = {
    searchQuery: '',
    hitsPerPage: 20,
    page: 0
  }

  handleInputChange = ({target: {value}}) => {
    this.setState({
      searchQuery: value
    })
  }
  handleHitsChange = ({target: {value}}) => {
    this.setState({
      hitsPerPage: +value,
      page: 0,
    })
  }
  getSearch = ({key}) => {
    if (key === 'Enter'){
      this.setState({
        page: 0
      })
    }
  }

  render() {
    const {searchQuery, hitsPerPage} = this.state

    return (
      <div className={'post-wrapper'}>
        <Title title={'Hacker News'}/>
        <Select
          options={HITS}
          handleChange={this.handleHitsChange}
          value={hitsPerPage}
        />
        <Input
          onKeyPress={this.getSearch}
          onChange={this.handleInputChange}
          value={searchQuery}
        />
      </div>
    );
  }
}

export default Posts;