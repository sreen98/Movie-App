import React from "react";
import "../styling/MovieDetail.css";
import "../styling/MovieCard.css";
import Button from "react-bootstrap/Button";
import {
  toggleShowForm,
  toggleisEdit,
  setEditDetail,
} from "../actions/movieSlice";
import { useDispatch } from "react-redux";

const MovieDetail = ({ show, details, handleClose, handleDeleteButton }) => {
  const dispatch = useDispatch();
  const onClickDelete = (id) => {
    handleDeleteButton(id);
    handleClose();
  };
  const onClickEdit = (details) => {
    handleClose();
    dispatch(toggleShowForm(true));
    dispatch(toggleisEdit(true));
    dispatch(setEditDetail(details));
  };
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="card-item">
          <div className="card-inner">
            <img
              src="./icons/CloseIcon.png"
              className="closeIcon"
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
                    src={
                      details.imgURL
                        ? details.imgURL
                        : "https://dummyimage.com/600x400/ffffff/000000.png&text=Placeholder+image"
                    }
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
                  <h4>{`Duration: ${details.duration} hr`}</h4>
                  <h4>{`Genre: ${details.genre}`}</h4>
                </span>
              </div>
              <div className="cardfooter">
                <Button variant="primary" onClick={() => onClickEdit(details)}>
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => onClickDelete(details.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieDetail;
