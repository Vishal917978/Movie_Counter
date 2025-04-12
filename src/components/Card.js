import './Card.css';
import StaticExample from './Card_Details';
import 'bootstrap/dist/css/bootstrap.min.css';
function BasicExample2(Props) {
  return (
    <div className="card " >
      <div className="image ">
        <img src={Props.data.Poster} alt="image"></img>
      </div>
      <div className="txt">
        <p>{Props.data.Title}</p>
      </div>
    </div>
  );
}
export default BasicExample2;



//  ======for modal popup=======

// import './Card.css';
// import StaticExample from './Card_Details';
// import { useState } from 'react';

// function BasicExample2(props) {
//   const [showModal, setShowModal] = useState(false);

//   const handleCardClick = () => {
//     setShowModal(true);
//   };

//   const handleClose = () => {
//     setShowModal(false);
//   };

//   return (
//     <>
//       <div className="card" onClick={handleCardClick}>
//         <div className="image">
//           <img src={props.data.Poster} alt="image" />
//         </div>
//         <div className="txt">
//           <p>{props.data.Title}</p>
//         </div>
//       </div>

//       {showModal && <StaticExample onClose={handleClose} data={props.data} />}
//     </>
//   );
// }

// export default BasicExample2;
