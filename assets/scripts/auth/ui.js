'use strict';

const store = require('../store.js');


const signUpSuccess = function(signUpData) {
  $('#sign-up').trigger('reset');
  $('#sign-up-in-modal-messages').html('You\'ve successful signed up!');
  return signUpData;
};

const signUpFailure = function() {
  $('#sign-up-in-modal-messages').html('Oops, something went wrong, trying signing up again.');
};

const signInSuccess = function(data) {
  store.user = data.user;
$('#sign-in').trigger('reset');
$('#sign-up-in-modal-messages').html('You\'ve successfully signed in!');
$('#sign-up-sign-in-modal').hide(1000);
// show sign out button, change password buttons, view cart buttons
$('.im-sign-in').show();
$('.im-sign-out').hide();
};

const signInFailure = function() {
$('#sign-up-in-modal-messages').html('Oops, something went wrong, trying signing in again.');
};

const changePasswordSuccess = function() {
$('#change-password-modal-messages').trigger('reset');
$('#user-message').html('You\'ve successfully changed your password.');
};

const changePasswordFailure = function() {
$('#change-password-modal-messages').html('Oops, something went wrong, trying changing your password again.');
};

const signOutSuccess = function() {
  // replace message div content with ('')?
  $('#sign-out-modal-messages').html('You\'ve successfully signed out.');
  // show sign in and sign up buttons
  $('.im-sign-in').hide();
  $('.im-sign-out').show();
};

const failure = function() {
$('#sign-out-modal-messages').html('Oops, something went wrong.');
};


module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  failure,
};
