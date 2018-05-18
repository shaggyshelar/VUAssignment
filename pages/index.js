import React from 'react';
import {connect} from 'react-redux';
import {startClock, serverRenderClock} from '../store';
import Link from 'next/link';
import Examples from '../components/examples';
import PhotoComponent from '../components/photoComponent';

class Index extends React.Component {
  render () {
    return (
      <PhotoComponent />
    )
  }
}

export default connect()(Index)