import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';

const VideoBackground = ({movieId}) => {

 // fetch trailer video

const getMovieVideos = async () => {
  const data = await fetch('https://api.themoviedb.org/3/movie/1022789/videos?language=en-US', API_OPTIONS);
  const json = await data.json();
  console.log(json);

  // Filter trailer in  ID

  const filterData = json.results.filter((video) => video.type === "Trailer");
  const trailer = filterData.length ? filterData[0] :json.results[0] ;
  console.log(trailer);

}

useEffect (() => {
  getMovieVideos();
},[])

  return (
    <div>
      VideoBackground
    </div>
  )
}

export default VideoBackground
