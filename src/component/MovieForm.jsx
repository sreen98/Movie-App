import React from "react";

function MovieForm(props) {
  const showHideClassName =
    props.show || true ? "modal display-block" : "modal display-none";
  return (
    <div>
      MovieForm
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
                onClick={props.handleFormClose}
                alt="Close Icon"
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="card-top"></div>
              </div>

              <div className="movieOverview"></div>
              <div className="card-bottom">
                <div className="card-info"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
      );
    </div>
  );
}

export default MovieForm;
