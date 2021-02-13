import React from 'react';
import { Link } from 'react-router-dom';

function Track(props) {
  // console.log(props);
  const { track } = props;
  // console.log(track); 
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          <p className="card-text">
            <strong><i className="fas fa-play"></i>Track:</strong>
            {track.track_name}
            <br />
            <strong><i className="fas compact-disc"></i>Album:</strong>
            {track.album_name}
          </p>
          {/* если используется router, то вместо тега а используется Link */}
          <Link to={`lyrics/track/${track.track_id}`} className="btn btn-dark d-block">
            <i className="fas fa-chevron-right"></i>View lyrics
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Track;