var StaticDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img class = "bandImage" src="img/Toy_bon.gif" width = 150px >'); 
  this.$node.addClass('band');
  this.$node.removeClass('Dancer');
};

StaticDancer.prototype = Object.create(Dancer.prototype);
StaticDancer.prototype.constructor = StaticDancer;

StaticDancer.prototype.step = function() {


  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // me.$node.toggleClass('slideMove');
  // me.$node.toggle();
  // console.log (me.$node);
  // $();
};