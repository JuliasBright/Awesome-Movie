// import React from "react";
import React, { useState, useEffect } from 'react';

import AddFavourites from './AddToFavourites';
import MovieList from './Movie/Movie';


const About  = () => {
	const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);

	const getMovieRequest = async () => {
		const url = `http://www.omdbapi.com/?s=fast&furios&apikey=263d22d8`;
		

		const response = await fetch(url);
		
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
		
	};

	
	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
	};


	useEffect(() => {
		getMovieRequest();
	}, []);


	return (
		<div className='container-fluid movie-app'>
			<h6>Latest Movies<i className="fa fas-movie"></i></h6>
			
			<div className='row'>
				
				<MovieList movies={movies} favouriteComponent={AddFavourites} handleFavouritesClick={addFavouriteMovie} />
				
				
				
			</div>
			
			
			<div className='row d-flex align-items-center mt-4 mb-4'>
			<h6>Favorates <i className="fa fas-movie"></i></h6>
			</div>
			<div className='row'>
				<MovieList movies={favourites} favouriteComponent={AddFavourites} />
			</div>
			
		</div>
	);
};




export default About;