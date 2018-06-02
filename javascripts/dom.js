/* eslint camelcase: 0 */

const domString = (movieArray, config, whereToPrint, myCollectionMode = false) => {
  let string = '';
  movieArray.forEach((movie, index) => {
    if (index % 3 === 0) {
      string += `<div class="row">`;
    }
    string += `<div class="col-sm-6 col-md-4">`;
    string +=  `<div class="thumbnail movie" data-firebase-id="${movie.id}">`;
    if (myCollectionMode) {
      string += `<a class="btn deleteMovieFromCollectionEvent">X</a>`;
    }
    string +=    `<img data-poster="${movie.poster_path}" src="${config.base_url}/w342/${movie.poster_path}" alt="Movie Poster">`;
    string +=    `<div class="caption">`;
    string +=      `<h3 class="movie-title">${movie.original_title ? movie.original_title : movie.title}</h3>`;
    string +=      `<p class="movie-overview">${movie.overview}</p>`;
    if (!myCollectionMode) {
      string +=      `<p><a href="#" class="btn btn-default addMovieToWishlist" role="button">Wishlist</a></p>`;
    } else if (myCollectionMode && !movie.isWatched) {
      string += `<p><a class="btn btn-primary updateMovieToWatched" role="button">I've Watched It</a></p>`;
    } else {
      string += `<p>I'm going to put star rating here one day</p>`;
    }
    string +=    `</div>`;
    string +=  `</div>`;
    string += `</div>`;

    if (index % 3 === 2) {
      string += `</div>`;
    }
  });
  printToDom(whereToPrint, string);
};

const printToDom = (whereToPrint, stringz) => {
  $(`#${whereToPrint}`).html(stringz);
};

module.exports = {
  domString,
};
