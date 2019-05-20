import React, { Component } from 'react';
import MovieDetail from '../';

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {}
    };
  }

  componentWillMount() {
  }

  render() {
    <MovieDetail />
  }
}
