$(document).ready(function() {
  window.dancers = [];

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

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push (dancer); 
    console.log (window.dancers);
  });
  
  
  
  $('.addBand').on('click', function (event) {
    var winWidth = window.innerWidth;
    var numberToUse = Math.floor (winWidth / 50);
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    
    for (var i = 1; i < numberToUse / 2; i++) {
      var dancer = new dancerMakerFunction(
        $('body').height() * .05,
        (numberToUse * i * 3)
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
    
  

  
});

