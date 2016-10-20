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
    screenString = screenString.replace('x', '*').replace('÷', '/');
  });

  clearButton.on('click', function() {
    screenString = '';
    screen.text(screenString);
  })

  equalsButton.on('click', function() {
    try {
      screen.text(eval(screenString));
      screenString = screen.text();
    }
    catch (err) {
      screen.text('ERROR!');
      screenString = '';
    }

  });
});
