 # netflix-gpt

 - create React app
 - configured TailwindCSS
 - Header
 - Routing of App
 - Login form
 - Sign up Form
 - Form Validation
 - useRef Hook
 - firebase setup
 - Deploying our app to production
 - Create signUp user Account
 - Implement Sign In user api
 - Create Redux Store with userSlice
 - Implemented Sign Out
 - Update Profile
 - Bugfix: Sign up user displayName and profile picture update
 - Bugfix: if the user is not logged in Redirect /browse to Login page and vice-versa
 - Unsubscribe to the onAuthStateChanged callback
 -  Add hardcoded values to the constants file
 - Register TMDB API & create an app & get access token
 - Get data from TMDB now playing movies list API
 - Custom hook for Now Playing movies
 - Create movieSlice
 - Update store with movies data
 - Planning for MainContainer and Secondary container 
 - Fetch data for Trailer videos
 - Update store with Trailer videos Data
 - Embedded the Youtube video and make it autoplay and mute
 - Tailwind classes to make main container look awesome
 -  

# Features 
- Login/Sign Up
 - Sign In / Sign up Form
 - redirect to Browse Page
- Browse (after authentication)
   - Header
   - Main Movie
    - Tailer in Background
    - Title & Description 
    - MovieSuggestions
     - MovieLists * N

- NetflixGPT
 - Search Bar
 - Movies Suggestions     



# Firebase setup

- npm install firebase
- npm install -g firebase-tools
- firebase login
- firebase init 
 -  Hosting: Configure files
    for Firebase Hosting and (optionally) set up GitHub Action deploys
 -  ? Configure as a single-page app (rewrite all urls to /index.html)? No
    ? Set up automatic builds and deploys with GitHub? No
- npm run build    
- firebase deploy