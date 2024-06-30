import React from 'react'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import {useSelector} from "react-redux";

const Maincontainer = () => {
 
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if(!movies) return;

 const mainMovie = movies[0];
 
 console.log(mainMovie); 

 const {original_title,overview} = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      
      <VideoBackground/>
    </div>
  )
}

export default Maincontainer;
