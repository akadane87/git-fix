'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const authEvents = require('../auth/events.js');

$(() => {
  setAPIOrigin(location, config);
  authEvents.addHandlers();
});
<<<<<<< HEAD
=======

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');
const stripeEvents = require('./stripe/stripe-events.js');



// use require without a reference to ensure a file is bundled
require('./example');
require('./assets/scripts/index.js');

// On document ready
$(() => {

  stripeEvents.addHandlers();

});
>>>>>>> Commit during rebase
