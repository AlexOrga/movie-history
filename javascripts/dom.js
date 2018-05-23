const domString = (movieArray) => {
  let string = '';
  movieArray.forEach((movie) => {

    string += `<div class="col-sm-6 col-md-4">`;
    string +=  `<div class="thumbnail">`;
    string +=    `<img src="..." alt="...">`;
    string +=    `<div class="caption">`;
    string +=      `<h3>${movie.original_title}</h3>`;
    string +=      `<p>${movie.overview}</p>`;
    string +=      `<p><a href="#" class="btn btn-primary" role="button">Review</a> <a href="#" class="btn btn-default" role="button">Wishlist</a></p>`;
    string +=    `</div>`;
    string +=  `</div>`;
    string += `</div>`;
  });
  printToDom(string);
};

const printToDom = (stringz) => {
  $('#movies').html(stringz);
};

module.exports = {
  domString,
};
