import React from "react";
import "../styling/MovieCard.css";

const MovieCard = (props) => {
  const { data } = props;
  // const onFileChange = (e) => {
  //   let files = e.target.files;
  //   let fileReader = new FileReader();
  //   fileReader.readAsDataURL(files[0]);

  //   fileReader.onload = (event) => {
  //     /*  this.setState({
  //       selectedImage: event.target.result,
  //     }); */
  //     console.log("img", event.target.result);
  //   };
  // };
  return (
    <div className="card-item" onClick={() => props.handleClick(data.id)}>
      {/* <input
        type="file"
        className="form-control"
        name="image"
        onChange={onFileChange}
      /> */}
      <div className="card-inner">
        <div className="card-top">
          {/* <img src={IMGPATH + data.poster_path} alt={data.title} /> */}
          <img src={""} alt={data.title} />
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
