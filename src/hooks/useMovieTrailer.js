import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/moviesSlice';

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch ();

    // fetch trailer video
   
    console.log("moviesId=",movieId);
   const getMovieVideos = async () => {
     const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
   
     const data = await fetch(url, API_OPTIONS);
     const json = await data.json();
     console.log(json);
     
     // fetch(url, API_OPTIONS);
     // fetch('https://api.themoviedb.org/3/movie/786892/videos?language=en-US', API_OPTIONS);
   
   
   
     // Filter trailer in  ID
   
     const filterData = json.results.filter((video) => video.type === "Trailer");
     const trailer = filterData.length ? filterData[0] :json.results[0] ;
     console.log("trailer" , trailer);
     dispatch(addTrailerVideo(trailer));
   
   }
   
   useEffect (() => {
     getMovieVideos();
   },[])
}

export default useMovieTrailer
