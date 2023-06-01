import React from "react";
import "../styling/MovieCard.css";

const MovieCard = (props) => {
  const { data } = props;

  return (
    <div className="card-item" onClick={() => props.handleClick(data.id)}>
      <div className="card-inner">
        <div className="card-top">
          <img
            src={
              data.imgURL
                ? data.imgURL
                : "https://dummyimage.com/600x400/ffffff/000000.png&text=Placeholder+image"
            }
            alt={data.title}
          />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{data.title}</h4>
            <p>
              Decription:{" "}
              {data.description.length > 10
                ? `${data.description.substring(0, 10)}...`
                : data.description}
            </p>
            <p>{`Duration: ${data.duration} hr`}</p>
            <p>{`Genre: ${data.genre}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
