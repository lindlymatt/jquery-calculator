'use strict';

$(function() {
  var allSpans = $("#buttons-container").find('span').not('#clear').not('#equals');
  var clearButton = $('#clear');
  var equalsButton = $('#equals');
  var screen = $('#screen');
  var screenString = '';

  allSpans.on('click', function() {
    screenString += $(this).text();
    screen.text(screenString);
  });

  clearButton.on('click', function() {
    screenString = '';
    screen.text(screenString);
  })

  equalsButton.on('click', function() {
    try {
      var evalValue = eval(screenString);

      if(screenString.includes('x')) {
        screenString = screenString.replace('x', '*');
      }

      screen.text(evalValue);
      screenString = screen.text();

    } catch (err) {
      console.log('catch');
      screen.text('ERROR!');
      screenString = '';
    }
  });
});
