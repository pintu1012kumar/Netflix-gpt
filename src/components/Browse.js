import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header'
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      <Maincontainer/>
      <SecondaryContainer/>
      {/* 
         MainContainer
          - videoBackground
          - videoTitle
         SecondaryContainer
          - MoviesList * n
           - cards * n 

      */}
    </div>
  )
}

export default Browse;
