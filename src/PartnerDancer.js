var PartnerDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('Partner');
  this.$node.prepend('<img src="img/FredbearGlitchingRight.gif" class="animated swing" height=250px>'); 
};

PartnerDancer.prototype = Object.create(Dancer.prototype);
PartnerDancer.prototype.constructor = PartnerDancer;

PartnerDancer.prototype.step = function() {
  var me = this;
  var oldStep = Dancer.prototype.step;

  oldStep.apply(me);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // me.$node.toggleClass('PartnerMove');
  // me.$node.toggle();
  // console.log (me.$node);
  // $();
};