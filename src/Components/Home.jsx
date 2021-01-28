import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../App.css';


function Home () {

  return(
      <div className="home">
        <div class="container">
          {/* Our Homepage-We can add more Plugins as needed  */}
          <div className="homestuff">
              Welcome to Awesome Movies
          </div>
       
        <a href="./Latest">
          <button  className="btn"  >
            Click to browse
          </button>
        </a>
      </div>

      {/* Car Animation */}
      <div class="slide-2">
        
            <div>
      
     				  <img src="https://cdn.dribbble.com/users/1726478/screenshots/3781908/car-dealer-loader-gif.gif" />
     				</div>
    			
    	</div>
    </div>
  );
}

export default Home;