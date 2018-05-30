/* eslint camelcase: 0 */

const domString = (movieArray, config) => {
  let string = '';
  movieArray.forEach((movie, index) => {
    if (index % 3 === 0) {
      string += `<div class="row">`;
    }
    string += `<div class="col-sm-6 col-md-4">`;
    string +=  `<div class="thumbnail movie">`;
    string +=    `<img data-poster="${movie.poster_path}" src="${config.base_url}/w342/${movie.poster_path}" alt="Movie Poster">`;
    string +=    `<div class="caption">`;
    string +=      `<h3 class="movie-title">${movie.original_title}</h3>`;
    string +=      `<p class="movie-overview">${movie.overview}</p>`;
    string +=      `<p><a href="#" class="btn btn-primary" role="button">Review</a></p>`;
    string +=      `<p><a href="#" class="btn btn-default addMovieToWishlist" role="button">Wishlist</a></p>`;
    string +=    `</div>`;
    string +=  `</div>`;
    string += `</div>`;

    if (index % 3 === 2) {
      string += `</div>`;
    }
  });
  printToDom(string);
};

const printToDom = (stringz) => {
  $('#movies').html(stringz);
};

module.exports = {
  domString,
};
