import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://cdn.dribbble.com/users/512844/screenshots/5288672/racing_star.gif"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Contact</h1>
            <p>
              Developer Information:
              <ul>
                <li>Name: Julius Bright</li>
                <li>Contact: 0847576329</li>
              </ul>
            </p>
            <a href="https://juliusbright.com">
            <button  className="btn" >
              View Profile
            </button>
            </a>
            
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;