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


import { Modal } from 'react-bootstrap';
import './MovieModal.css';

function MovieModal({ show, handleClose, movie }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      centered
      className="movie-modal"
    >
      <Modal.Header closeButton className="modal-header">
        <Modal.Title className="modal-title">
          {movie?.Title || 'Movie Title'}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="modal-body">
        <div className="movie-content">
          {/* Poster and Quick Info */}
          <div className="poster-section">
            <img
              src={movie?.Poster}
              alt={movie?.Title}
              className="movie-poster"
            />
            <div className="quick-info">
              <p><strong>Year:</strong> {movie?.Year}</p>
              <p><strong>Genre:</strong> {movie?.Genre}</p>
              <p><strong>Runtime:</strong> {movie?.Runtime}</p>
              <p><strong>Rated:</strong> {movie?.Rated}</p>
              <p><strong>IMDb:</strong> {movie?.imdbRating}/10</p>
            </div>
          </div>

          {/* Detail Section */}
          <div className="details-section">
            {/* Plot */}
            <div className="detail-block">
              <h4>Plot Summary</h4>
              <p className="plot-text">{movie?.Plot}</p>
            </div>

            {/* Cast & Crew */}
            <div className="detail-block">
              <h4>Cast & Crew</h4>
              <p><strong>Director:</strong> {movie?.Director}</p>
              <p><strong>Writer:</strong> {movie?.Writer}</p>
              <p><strong>Actors:</strong> {movie?.Actors}</p>
              <p><strong>Language:</strong> {movie?.Language}</p>
            </div>

            {/* Ratings */}
            <div className="detail-block">
              <h4>Ratings & Reviews</h4>
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
