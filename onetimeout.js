OneTimeout = function(delay) {
  if (typeof delay == 'undefined')
    throw new Error('New api');
  // Pointer to Meteor.setTimeout
  var id = null;
  // Save the methods into the localstorage
  return function oneTimeout(f) {
    // If a timeout is in progress
    if (id !== null) {
      // then stop the current timeout - we have updates
      Meteor.clearTimeout(id);
    }
    // Spawn new timeout
    id = Meteor.setTimeout(function runOneTimeout() {
      // Ok, we reset reference so we dont get cleared and go to work
      id = null;
      // Run function
      f();
      // Delay execution a bit
    }, delay);
  };
};