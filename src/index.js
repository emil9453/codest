import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/**
 * You should avoid using the var keyword. Its is better to use let or const.
 * It is better to use arrow functions instead of function expressions. 
 * Open terminal to see acessibity issues and other problems.
 */

/**
 * It is better to use the React.useState hook instead of getWatchedMovies and getAllMovies functions. 
 * I would recommend using the useState hook for the movies array.
 * You can add "isWatched" property to the movie object."
 * If you'll add this property, It will be easier to store single array of movies in localStorage.
 */
export function getWatchedMovies() {
	var movies = localStorage.getItem('movies-watched');

	if (!movies) {
		return [];
	} else {
		// use try/catch block to handle the error if the data is not in the correct format.
		return JSON.parse(movies);
	}
}

export function getAllMovies() {
	var movies = localStorage.getItem('movies-all');

	if (!movies) {
		return [
		{
			title: 'The Avengers',
			image: 'http://d21lz9b0v8r1zn.cloudfront.net/wp-content/uploads//2012/03/detail.jpg',
			comment: 'New York blows up in this!'
		},
		{
			title: 'Dark City',
			image: 'https://i.chzbgr.com/full/5569379584/hA96709E0/',
			comment: 'This looks mysterious. Cool!'
		},
		{
			title: 'Hot Tub Time Machine',
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7vNmphIcVhEcybvSvMgbTkV6EE2twHBNanKvgDx3ZS7Ivn6Dtg',
			comment: 'Someone said this was fun. Maybe!'
		},
		];
	} else {
		return JSON.parse(movies);
	}
}

/**
 * It is not a good idea to rerender the whole app every time movie is added or removed from the list.
 * It is better to name this function addMovie instead of add.
 * Check whether the movie is already in the watched list.
 * Also add 'isWatched' to addMovie function as parameter. 
 * Rename description to comment.
 */
export function add(title, description, image) {
	var movie = {};
	movie.title = title;
	movie.description = description;
	movie.image = image;

	var movies = getAllMovies();
	movies.push(movie);

	localStorage.setItem('movies-all', JSON.stringify(movies));

	render();
}

/**
 * I would recommend to combine addWatchedMovie and removeWatchedMovie functions into one function.
 * Name it toggleMovieIsWatched. and pass 'isWatched' and 'title' as parameter.
 * Rename desc
 **/
export function addWatchedMovie(title, description, image) {
	var movie = {};
	movie.title = title;
	movie.description = description;
	movie.image = image;

	var movies = getWatchedMovies();
	movies.push(movie);

	localStorage.setItem('movies-watched', JSON.stringify(movies));

	render();
}

export function removeWatchedMovie(title) {
	var movies = getWatchedMovies();

	// It is better to use filter function instead of forEach.
	// Use tripple equals sign to compare the title.
	for (var i = 0; i < movies.length; i++) {
	   if (!movies[i]) continue;
		if (movies[i].title == title) {
			movies[i] = null
		}
	}

	localStorage.setItem('movies-watched', JSON.stringify(movies));

	render();
}

// No need to wrap React.render function in a function.	
function render() {
	// Here you pass props to App component, but they are not used there.
	ReactDOM.render(<App movies={getAllMovies()} watched={getWatchedMovies()} />, document.getElementById('root'))
}

render();
