import React from "react";
import "../styling/MovieDetail.css";
import "../styling/MovieCard.css";
// const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const MovieDetail = ({ show, details, handleClose, handleDeleteButton }) => {
  const onClickDelete = (id) => {
    handleDeleteButton(id);
    handleClose();
  };
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="card-item">
          <div className="card-inner">
            <img
              src="./icons/CloseIcon.png"
              style={{
                marginRight: "0",
                float: "right",
                height: "30px",
                width: "30px",
                padding: "0.5rem 0.5rem 0 0",
              }}
              onClick={handleClose}
              alt="Close Icon"
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="card-top">
                {
                  <img
                    // src={IMGPATH + details.poster_path}
                    alt={details.title}
                  />
                }
              </div>
            </div>

            <div className="movieOverview">
              <div style={{ margin: "0.5rem 0 0.5rem 0" }}>Overview</div>
              {details.description}
            </div>
            <div className="card-bottom">
              <div className="card-info">
                <span>
                  <h4>{details.title} </h4>
                  <h4>{`Duration: ${details.duration}`}</h4>
                  <h4>{`Genre: ${details.genre}`}</h4>
                </span>
              </div>
              <div className="cardfooter">
                <button className="editButton">Edit</button>
                <button
                  className="deleteButton"
                  onClick={() => onClickDelete(details.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieDetail;
