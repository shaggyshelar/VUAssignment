import React from 'react';
import {connect} from 'react-redux';
import {startClock, serverRenderClock} from '../store';
import Link from 'next/link';
import Examples from '../components/examples';
import PhotoComponent from '../components/photoComponent';

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  }

  componentDidMount () {
    const {dispatch} = this.props
    this.timer = startClock(dispatch)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <PhotoComponent />
    )
  }
}

export default connect()(Index)