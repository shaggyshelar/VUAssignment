import React from 'react';
import {connect} from 'react-redux';
import {startClock, serverRenderClock} from '../store';
import Link from 'next/link';
import Examples from '../components/examples';

const Photo = (props) => (
  <li>
    <Link href={`/photo?id=${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
)

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
      // <Examples />
      <div>
        <h2>My blog</h2>
        <ul>
          <li>
            <Photo slug="yet-another-post" id="Yet another post" />
            <Photo slug="second-post" id="Second post" />
            <Photo slug="hello-world" id="Hello, world!" />
          </li>
        </ul>
      </div>
    )
  }
}

export default connect()(Index)