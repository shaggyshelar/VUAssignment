import React from 'react';
import {connect} from 'react-redux';
import {startClock, serverRenderClock} from '../store';

class Photo extends React.Component {
    static getInitialProps ({ reduxStore, req, query }) {
      const isServer = !!req
      reduxStore.dispatch(serverRenderClock(isServer))
      return {selectedId: query.id}
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
        <div>
          <h2>Photo {this.props.selectedId}</h2>
        </div>
      )
    }
  }
  
  export default connect()(Photo)