const {getAllMoviesEvent,} = require('./events');

const checkoutLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      $('#myMovies').removeClass('hide');
      $('#search').addClass('hide');
      $('#authScreen').addClass('hide');
      // Nav Components
      $('#auth-nav').addClass('hide');
      $('#my-movie-nav').removeClass('hide');
      $('#search-nav').removeClass('hide');
      $('#logout-nav').removeClass('hide');
      getAllMoviesEvent();
    } else {
      // No user is signed in.
      $('#myMovies').addClass('hide');
      $('#search').addClass('hide');
      $('#authScreen').removeClass('hide');
      $('#auth-nav').removeClass('hide');
      $('#my-movie-nav').addClass('hide');
      $('#search-nav').addClass('hide');
      $('#logout-nav').addClass('hide');
    }
  });
};

module.exports = {
  checkoutLoginStatus,
};
