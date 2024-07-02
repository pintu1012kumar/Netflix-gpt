import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';

const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector(store =>store.movies?.trailerVideo);
  const dispatch = useDispatch ();

 // fetch trailer video

 console.log(movieId);
const getMovieVideos = async () => {
  //const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;

  const data = await fetch('https://api.themoviedb.org/3/movie/786892/videos?language=en-US', API_OPTIONS);
  const json = await data.json();
  console.log(json);
  
  // fetch(url, API_OPTIONS);
  // fetch('https://api.themoviedb.org/3/movie/786892/videos?language=en-US', API_OPTIONS);



  // Filter trailer in  ID

  const filterData = json.results.filter((video) => video.type === "Trailer");
  const trailer = filterData.length ? filterData[0] :json.results[0] ;
  console.log(trailer);
  dispatch(addTrailerVideo(trailer));

}

useEffect (() => {
  getMovieVideos();
},[])

  return (
    <div>
      <iframe
       width="560" 
       height="315"
       src= {"https://www.youtube.com/embed/" + trailerVideo?.key}
       title="YouTube video player" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       referrerpolicy="strict-origin-when-cross-origin" 
       >

      </iframe>
    </div>
  )
}

export default VideoBackground



// const trailerVideo = useSelector(store =>store.movies?.trailerVideo);
// const dispatch = useDispatch ();
// dispatch(addTrailerVideo(trailer));

// you can create a useState(trailerID,settrailerID) and change the state in place of dispatch(addTrailerVideo(trailer)); &
//   trailerVideo.key is replace with trailerID