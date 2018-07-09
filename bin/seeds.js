const mongoose = require('mongoose');

// import model to have blueprint:
const Movie = require('../models/movie-model');

// don't forget to connect with your DB (make sure your DB name corresponds to the one in app.js)
const dbName = 'exercise-movies'
mongoose.connect(`mongodb://localhost/${dbName}`);

const moviesArray = [
    {
        title: 'movie1',
        genre: 'genre1',
        plot: 'plot1'
    },
    {
        title: 'movie2',
        genre: 'genre2',
        plot: 'plot2'
    },
    {
        title: 'movie3',
        genre: 'genre3',
        plot: 'plot3'
    },
];

// use .create() mongoose method to create entries in DB
Movie.create(moviesArray)
.then(movies => {
    movies.forEach(oneMovie => {
        console.log('In DB: ', oneMovie.title);
    });
    // cut off DB connection
    mongoose.disconnect();
})
.catch( err => console.log('Error while creating seeds: ', err));







