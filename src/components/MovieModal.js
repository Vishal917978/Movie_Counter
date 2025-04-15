// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// function StaticExample() {
//   return (
//     <div
//       className="modal show"
//       style={{ display: 'block', position: 'initial' }}
//     >
//       <Modal.Dialog>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal title</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           <p>Modal body text goes here.</p>
//         </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary">Close</Button>
//           <Button variant="primary">Save changes</Button>
//         </Modal.Footer>
//       </Modal.Dialog>
//     </div>
//   );
// }

// export default StaticExample;

// import './Card_Details.css';
// import { Modal } from 'bootstrap';
// function MovieModal({ show, handleClose, movie, loading, error }) {
//   return (
//     <Modal show={show} onHide={handleClose} size="xl" centered>
//       <Modal.Header closeButton>
//         <Modal.Title>{movie?.Title || 'Movie Details'}</Modal.Title>
//       </Modal.Header>
      
//       <Modal.Body>
//         {movie && !loading && !error && (
//           <div className="modal-details-grid">
//             {/* Left Column */}
//             <div className="detail-section">
//               <img 
//                 src={movie.Poster} 
//                 alt={movie.Title} 
//                 className="img-fluid rounded"
//               />
//               <div className="mt-3">
//                 <h5>Quick Info</h5>
//                 <div className="detail-item">
//                   <span className="detail-label">Year:</span>
//                   <span className="detail-content">{movie.Year}</span>
//                 </div>
//                 <div className="detail-item">
//                   <span className="detail-label">Rated:</span>
//                   <span className="detail-content">{movie.Rated}</span>
//                 </div>
//                 <div className="detail-item">
//                   <span className="detail-label">Runtime:</span>
//                   <span className="detail-content">{movie.Runtime}</span>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="detail-section">
//               <h5>Plot Summary</h5>
//               <p className="detail-content">{movie.Plot}</p>
              
//               <h5 className="mt-4">Cast & Crew</h5>
//               <div className="detail-item">
//                 <span className="detail-label">Director:</span>
//                 <span className="detail-content">{movie.Director}</span>
//               </div>
//               <div className="detail-item">
//                 <span className="detail-label">Actors:</span>
//                 <span className="detail-content">{movie.Actors}</span>
//               </div>
              
//               <h5 className="mt-4">Technical Info</h5>
//               <div className="detail-item">
//                 <span className="detail-label">Genre:</span>
//                 <span className="detail-content">{movie.Genre}</span>
//               </div>
//               <div className="detail-item">
//                 <span className="detail-label">Language:</span>
//                 <span className="detail-content">{movie.Language}</span>
//               </div>
//             </div>

//             {/* Ratings Row */}
//             <div className="detail-section" style={{ gridColumn: '1 / -1' }}>
//               <h5>Ratings & Reviews</h5>
//               <div className="d-flex flex-wrap">
//                 {movie.Ratings?.map((rating, index) => (
//                   <div key={index} className="rating-badge">
//                     <strong>{rating.Source}:</strong> {rating.Value}
//                   </div>
//                 ))}
//                 <div className="rating-badge">
//                   <strong>IMDb:</strong> {movie.imdbRating}/10 ({movie.imdbVotes} votes)
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </Modal.Body>
//     </Modal>
//   );
// }
// export default MovieModal


import { Modal } from 'react-bootstrap';
import './MovieModal.css';

function MovieModal({ show, handleClose, movie }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered className="movie-modal">
      <Modal.Header closeButton className="modal-header">
        <Modal.Title className="modal-title">{movie?.Title}</Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="modal-body">
        <div className="movie-content">
          <div className="poster-section">
            <img src={movie?.Poster} alt={movie?.Title} className="movie-poster" />
            <div className="quick-info">
              <p><strong>Year:</strong> {movie?.Year}</p>
              <p><strong>Genre:</strong> {movie?.Genre}</p>
              <p><strong>Rating:</strong> {movie?.imdbRating}/10</p>
            </div>
          </div>
          
          <div className="details-section">
            <div className="detail-block">
              <h4>Plot</h4>
              <p className="plot-text">{movie?.Plot}</p>
            </div>
            
            <div className="detail-block">
              <h4>Cast & Crew</h4>
              <p><strong>Director:</strong> {movie?.Director}</p>
              <p><strong>Actors:</strong> {movie?.Actors}</p>
            </div>
            
            <div className="detail-block">
              <h4>Reviews & Ratings</h4>
              <div className="ratings">
                {movie?.Ratings?.map((rating, index) => (
                  <div key={index} className="rating-item">
                    <span className="rating-source">{rating.Source}</span>
                    <span className="rating-value">{rating.Value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MovieModal;


