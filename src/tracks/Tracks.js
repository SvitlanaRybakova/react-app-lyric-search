import React, { useContext } from 'react';
import {Context} from '../tracks/contexts/Context'



function Tracks(){

  const { trackList, heading } = useContext(Context);
  console.log(trackList, heading);
  return(
    <>
    
      
      <h1>Hello</h1>
    
    </>
  )
}export default Tracks;