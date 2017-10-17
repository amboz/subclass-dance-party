var SlideDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img src="img/Shopkeeper.gif" height=250px>'); 
};

SlideDancer.prototype = Object.create(Dancer.prototype);
SlideDancer.prototype.constructor = SlideDancer;

SlideDancer.prototype.step = function() {
  var me = this;
  var oldStep = Dancer.prototype.step;
  // console.log (me.timeBetweenSteps);
  oldStep.apply(me);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  me.$node.toggleClass('slideMove');
  // me.$node.toggle();
  // console.log (me.$node);
  // $();
};