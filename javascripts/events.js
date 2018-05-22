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

module.exports = {
  myLinks,
};
