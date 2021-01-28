import React from "react";

function MovieInfo() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-6">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://cdn.dribbble.com/users/512844/screenshots/5288672/racing_star.gif"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Movie Info</h1>
            <p>
             
            </p>
            <button  className="btn" variant ="outlined" color="green">
              Click to browse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;