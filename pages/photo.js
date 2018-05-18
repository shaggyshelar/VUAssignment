import React from 'react';
import {connect} from 'react-redux';
import {getPhotoComments} from '../store';

class Photo extends React.Component {
    static getInitialProps ({ reduxStore, req, query }) {
      const isServer = !!req
      reduxStore.dispatch(getPhotoComments(query.id))
      return {selectedId: query.id}
    }

    componentDidMount() {
      const {dispatch} = this.props;
      dispatch(getPhotoComments());
    }
  
    render () {
      let photosList = this.props.photoComments && this.props.photoComments.map((commentDetails, key) => (
        <div key={key}>
          <h1>{commentDetails.text}</h1>
        </div>
      ));
      return (
        <div>
          <h2>Photo {this.props.selectedId}</h2>
          {photosList}
        </div>
      )
    }
  }

  function mapStateToProps (state) {
    const {photoComments} = state
    return {photoComments}
  }
  
  export default connect(mapStateToProps)(Photo)