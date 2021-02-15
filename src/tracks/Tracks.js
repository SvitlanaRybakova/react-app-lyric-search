import React, { useContext, useEffect } from 'react';
import { Context } from '../contexts/Context';
import Spinner from '../components/layout/Spinner';
import Track from './Track';


function Tracks() {

  const { trackList, heading} = useContext(Context);
  console.log(trackList, heading);

  

  return (
    <>
      {trackList.length > 0 ? 
      <>
      <h3 className="text-center mb-4">{heading}</h3>
      <div className="row">
        { trackList.map(item=> (
          <Track key={item.track.track_id} track={item.track} />
        )
        )}
      </div>
      </>
      
      : <Spinner />}
    
      

    </>
  )
} export default Tracks;