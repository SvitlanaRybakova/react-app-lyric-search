import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const Context = createContext();

function ContextProvider(props) {

  const [trackList, setTrackList] = useState([
    
  ])

  const [ heading, setHeading ] = useState('Top 10 Tracks');
  
  
  useEffect(() => {
    
    axios.get(`https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=5&country=it&f_has_lyrics=1&apikey=a9fb099bf0129f268bf60971925593cf`)
    .then(res =>  {
      setTrackList(res.data.message.body.track_list)
    })
    .catch(err => console.log(err))

    
  },[])
  
  

  return (
   
    <Context.Provider value={{ trackList, heading }}>
      {props.children}
    </Context.Provider>
  )

}
export default ContextProvider;