// import './Card.css';
// import StaticExample from './Card_Details';
// import 'bootstrap/dist/css/bootstrap.min.css';
// function BasicExample2(Props) {
//   return (
//     <div className="card " >
//       <div className="image ">
//         <img src={Props.data.Poster} alt="image"></img>
//       </div>
//       <div className="txt">
//         <p>{Props.data.Title}</p>
//       </div>
//     </div>
//   );
// }
// export default BasicExample2;




import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function BasicExample2({ data, onClick }) {
  return (
    <div 
      className="card movie-card"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="image-container">
        <img 
          src={data.Poster} 
          alt={data.Title} 
          className="card-image"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = 'https://via.placeholder.com/300x450?text=No+Image';
          }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{data.Title}</h5>
        {/* <p className="card-text">Year: {data.Year}</p>
        <p className="card-text">Type: {data.Type}</p> */}
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
