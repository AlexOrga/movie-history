const domString = (movieArray, config) => {
  let string = '';
  movieArray.forEach((movie, index) => {
    if (index % 3 === 0) {
      string += `<div class="row">`;
    }
    string += `<div class="col-sm-6 col-md-4">`;
    string +=  `<div class="thumbnail">`;
    string +=    `<img src="${config.base_url}/w342/${movie.poster_path}" alt="Movie Poster">`;
    string +=    `<div class="caption">`;
    string +=      `<h3>${movie.original_title}</h3>`;
    string +=      `<p>${movie.overview}</p>`;
    string +=      `<p><a href="#" class="btn btn-primary" role="button">Review</a> <a href="#" class="btn btn-default" role="button">Wishlist</a></p>`;
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
