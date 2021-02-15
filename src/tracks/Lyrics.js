import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Spinner from '../components/layout/Spinner'
import { Link } from "react-router-dom";
import Moment from "react-moment";



function Lyrics(props) {
  // weird props????
  // console.log(props);
  // console.log(props.match.params.id);

  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});

  useEffect(() => {
    try {
      axios.get(`http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
        props.match.params.id
      }&apikey=${process.env.REACT_APP_MM_KEY}`
    )
        .then(res => {
          setLyrics(res.data.message.body.lyrics)
          
          return axios.get(
            `//api.musixmatch.com/ws/1.1/track.get?track_id=${
              props.match.params.id
            }&apikey=${process.env.REACT_APP_MM_KEY}`
          )
        })
        .then(res => {
          setTrack(res.data.message.body.track)
          
        })

    } catch (err) {
      console.log(err)
    }
  },[props.match.params.id])

  console.log(track, lyrics);
  if (
    track === undefined ||
    lyrics === undefined 
    ||Object.keys(track).length === 0 ||
    Object.keys(lyrics).length === 0
  ) {

    return <Spinner />;
  }
  else{
    return (
      <>
        <Link to="/" className="btn btn-dark btn-sm mb-4">
          Go Back
        </Link>
        <div className="card">
          <h5 className="card-header">
            {track.track_name} by{" "}
            <span className="text-secondary">{track.artist_name}</span>
          </h5>
          <div className="card-body">
            <p className="card-text">{lyrics.lyrics_body}</p>
          </div>
        </div>

        <ul className="list-group mt-3">
          <li className="list-group-item">
            <strong>Album ID</strong>: {track.album_id}
          </li>
          <li className="list-group-item">
            <strong>Song Genre</strong>:{" "}
            {track.primary_genres.music_genre_list
              ? "NO GENRE AVAILABLE"
              : track.primary_genres.music_genre_list[0].music_genre
                  .music_genre_name}
          </li>
          <li className="list-group-item">
            <strong>Explicit Words</strong>:{" "}
            {track.explicit === 0 ? "No" : "Yes"}
          </li>
          <li className="list-group-item">
            <strong>Release Date</strong>:{" "}
            <Moment format="MM/DD/YYYY">
              {track.first_release_date}
            </Moment>
          </li>
        </ul>
      </>
    );
  }
  
}
export default Lyrics;