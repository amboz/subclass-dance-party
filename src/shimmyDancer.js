var ShimmyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('shimmy');
  this.$node.prepend('<img src="img/Jobattack.gif" class="animated shake" height=250px>'); 
};

ShimmyDancer.prototype = Object.create(Dancer.prototype);
ShimmyDancer.prototype.constructor = ShimmyDancer;

ShimmyDancer.prototype.step = function() {
  var me = this;
  var oldStep = Dancer.prototype.step;

  oldStep.apply(me);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // me.$node.toggleClass('shimmyMove');
  // me.$node.toggle();
  // console.log (me.$node);
  // $();
};