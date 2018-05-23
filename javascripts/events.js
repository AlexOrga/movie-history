const tmdb = require('./tmdb');

const myLinks = () => {
  $(document).click((e) => {
    if (e.target.id === 'auth-nav') {
      $('#authScreen').removeClass('hide');
      $('#search').addClass('hide');
      $('#myMovies').addClass('hide');
    } else if (e.target.id === 'my-movie-nav') {
      $('#myMovies').removeClass('hide');
      $('#search').addClass('hide');
      $('#authScreen').addClass('hide');
    } else if (e.target.id === 'search-nav') {
      $('#search').removeClass('hide');
      $('#authScreen').addClass('hide');
      $('#myMovies').addClass('hide');
    }
  });
};

const pressEnter = () => {
  $(document).keypress((e) => {
    if (e.key === 'Enter') {
      tmdb.showResults('cow');
    }
  });
};

const initializer = () => {
  myLinks();
  pressEnter();
};

module.exports = {
  initializer,
};
