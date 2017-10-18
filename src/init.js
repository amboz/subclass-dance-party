$(document).ready(function() {
  window.dancers = [];
  window.partnerDancers = [];  // [[dacer 1, dacer 2], [dacer 3, dancer 4]]

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
     
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = newDancer (dancerMakerFunction);
    
    $('body').append(dancer.$node);
    window.dancers.push(dancer); 
  });
  
  var partnerUp = function() {
    for (var i = 0; i < window.partnerDancers.length; i++) {
      var x = Math.random() * ($('body').width() - 200);
      var y = (Math.random() * ($('body').height() - 400)) + 175;
      partnerDancers[i][0].setPosition(y, x);
      partnerDancers[i][1].setPosition(y, x + 100);
    }
  };
  
  $('.partnerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = newDancer (dancerMakerFunction);
    var dancer2 = newDancer (dancerMakerFunction);

    $('body').append(dancer.$node);
    $('body').append(dancer2.$node);

    window.partnerDancers.push([dancer, dancer2]); 
    
    partnerUp();
    partnerUp();
  });

  var newDancer = function (dancerMakerFunction) {
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
    (($('body').height() - 400) * Math.random()) + 175,
    ($('body').width() - 200) * Math.random(),
    (Math.random() * 1000) + 200
    ); 
    return dancer;
  };
  
  $('.addBand').on('click', function (event) {
    var winWidth = window.innerWidth;
    var numberToUse = Math.floor (winWidth / 75);
    var spacing = returnSpacing(numberToUse);
    
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    
    for (var i = 1; i < numberToUse; i++) {
      var dancer = new dancerMakerFunction(
        $('body').height() * .05,
        (spacing * (i - 1) )
      );
      $('body').append(dancer.$node);
    }
    
      /// do something on scroll
    $('.bandImage').mouseover(function () {
      $('.bandImage').attr('src', 'img/giphy.gif');
    });
    
    $('.bandImage').mouseout(function () {
      $('.bandImage').attr('src', 'img/Toy_bon.gif');
    });
  });
    
  $('.lineUp').on('click', function () {
    // console.log ('test')  // works
    var dancers = window.dancers;
    var winWidth = window.innerWidth;
    var spacing = returnSpacing(dancers.length, 'vertical');
    for (var i = 0; i < dancers.length; i++) {
      dancers[i].setPosition (spacing * i, 10);
    }
  });
});

var returnSpacing = function(numberofObject, verticalOrHorizontal = 'horizontal') {
  var winWidth = window.innerWidth;
  var winHeight = window.innerHeight;
  if (verticalOrHorizontal === 'horizontal') {
    return Math.floor(winWidth / numberofObject);
  } else if (verticalOrHorizontal === 'vertical') {
    return Math.floor(winHeight / numberofObject);
  }
};
