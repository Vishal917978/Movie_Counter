// import NavScrollExample from "../components/Nav1";
// import BasicExample1 from "../components/Gropdown";
// // import { useState } from "react";
// import './Home.css';
// import img2 from "..//image/card1.jpg";
// import BasicExample2 from '../components/Card';
// import axios from "axios";
// import StaticExample from "../components/Card_Details";
// import { useState } from "react";

// function Home(){
// let [data1,setData1]=useState([]);
//   async function fetchUser() {
//     let url='https://omdbapi.com/?apikey=4e9e8ed7&s=series';
//     const userResult = await axios.get(url);
//    console.log(userResult,"<=====result")
//    setData1(userResult.data.Search);
//   }


// return(
//       <div className="Outer">
//        <NavScrollExample/>

// <div className="back">
//     <h1>Movies Released in 2024</h1>
//     <h4><b>Select Year</b></h4>
//     <BasicExample1/>
//     <button onClick={fetchUser}>click </button>
//    <div className="card_cntr">
//    {

//       data1.map((movieData)=>{
//         return <BasicExample2 data={movieData}/>


//       })
//     }
//    </div>

//   </div>
// </div>
//      )
// }
// export default Home;




//========== using useEffect ->render all things autometically


// import NavScrollExample from "../components/Nav1";
// import BasicExample1 from "../components/Gropdown";
// import './Home.css';
// import BasicExample2 from '../components/Card';
// import axios from "axios";
// import StaticExample from "../components/Card_Details";
// import { useState } from "react";
// import { useEffect } from "react";

// function Home() {
//   const [Data1, setData1] = useState([]);
//   let [year,setYear]=useState(0);


//   useEffect(() => {
//     if (year) {
//       async function fetchMovies() {
//         const url = `http://omdbapi.com/?apikey=4e9e8ed7&s=series&y=${year}`;
//         const result = await axios.get(url);
//         setData1(result.data.Search);
//       }
  
//       fetchMovies();
//     }
//   }, [year]);


//   const handleDropdownChange = (value) => {
//     setYear(value);
//     console.log("Selected from dropdown:", year);
//   };

//   console.log(Data1, "<====D2");

//   return (
//     <>
//       <NavScrollExample />
//       <div className="outer">
//         <div className="back">
//           <h1>
//             <b>Movies Released in {year}</b>
//           </h1>
//           <h4>
//             <b>Select Year</b>
//           </h4>
//           <BasicExample1 data1={handleDropdownChange} />
//           <div className="card_cntr">
//             {
//             Data1.map((movieData) => (
//               <BasicExample2 key={movieData.imdbID} data={movieData} />
//             ))
//             }
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;







import NavScrollExample from "../components/Nav1";
import BasicExample1 from "../components/Gropdown";
import './Home.css';
import BasicExample2 from '../components/Card';
import axios from "axios";
import MovieModal from '../components/MovieModal';
import { useState, useEffect } from "react";

function Home() {
  const [Data1, setData1] = useState([]);
  const [year, setYear] = useState(2023);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (year) {
      async function fetchMovies() {
        try {
          const url = `http://www.omdbapi.com/?apikey=4e9e8ed7&s=series&y=${year}`;
          const result = await axios.get(url);
          setData1(result.data.Search);
        } catch (err) {
          setError(err.message);
        }
      }
      fetchMovies();
    }
  }, [year]);

  const fetchMovieDetails = async (imdbID) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=4e9e8ed7&i=${imdbID}`
      );
      setSelectedMovie(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch movie details');
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = (imdbID) => {
    fetchMovieDetails(imdbID);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  return (
    <>
      <NavScrollExample />
      <div className="outer">
        <div className="back">
          <h1><b>Movies Released in {year}</b></h1>
          <h4><b>Select Year</b></h4>
          <BasicExample1 data1={setYear} />
          <div className="card_cntr">
            {Data1.map((movieData) => (
              <BasicExample2 
                key={movieData.imdbID} 
                data={movieData}
                onClick={() => handleCardClick(movieData.imdbID)}
              />
            ))}
          </div>
        </div>
      </div>

      <MovieModal
        show={showModal}
        handleClose={handleCloseModal}
        movie={selectedMovie}
        loading={loading}
        error={error}
      />
    </>
  );
}

export default Home;