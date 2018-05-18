import {connect} from 'react-redux'
import Link from 'next/link';

function PhotoComponent ({ photos, count }) {
  let photosList = photos.map((photoDetails, key) => (
    <div key={key}>
      <Link href={`/photo?id=${photoDetails.code}`}>
        <a>{photoDetails.code}</a>
      </Link>
    </div>
  ));
  return (
    <div>
      {photosList}
    </div>
  )
}

function mapStateToProps (state) {
  const { photos, count } = state
  return { photos, count }
}

export default connect(mapStateToProps)(PhotoComponent)
