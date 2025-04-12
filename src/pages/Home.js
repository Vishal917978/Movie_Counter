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


import NavScrollExample from "../components/Nav1";
import BasicExample1 from "../components/Gropdown";
// import { useState } from "react";
import './Home.css';
// import img2 from "..//image/card1.jpg";
import BasicExample2 from '../components/Card';
import axios from "axios";
// import StaticExample from "../components/Card_Details";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const [Data1, setData1] = useState([]);
  let [year,setYear]=useState(2024);

  // Fetch data inside useEffect
  useEffect(() => {
    async function fetchUser() {
      const url = "http://omdbapi.com/?apikey=4e9e8ed7&s=series";
      const userResult = await axios.get(url);
      console.log(userResult, "<=====result");
      setData1(userResult.data.Search);

    }

    fetchUser();
  }, []);

  console.log(Data1, "<====D1");

  return (
    <>
      <NavScrollExample />
      <div className="outer">
        <div className="back">
          <h1>
            <b>Movies Released in 2024</b>
          </h1>
          <h4>
            <b>Select Year</b>
          </h4>
          <BasicExample1 />

          <div className="card_cntr">
            {
            Data1.map((movieData) => (
              <BasicExample2 key={movieData.imdbID} data={movieData} />
            ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;