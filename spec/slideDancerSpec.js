describe('SlideDancer', function() {
  var slideDancer, clock;
  var timeBetweenSteps = 100;
  beforeEach(function() {
    clock = sinon.useFakeTimers();
    slideDancer = new SlideDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(slideDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function to toogle class that makes its node slide', function() {
    sinon.spy(slideDancer.$node, 'toggleClass');
    slideDancer.step();
    expect(slideDancer.$node.toggleClass.called).to.be.true;
  });
  
  it ('should inherit the "height" property in the class "dancer" from superclass "dancer"', function () {
    var dancerCSS = slideDancer.$node.css('height');
    expect(dancerCSS).to.exist;
  });
  
  it('should inherit the method "setPosition" from superclass Dancer', function() {
    expect (slideDancer.setPosition).to.exist;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(slideDancer, 'step');
      expect(slideDancer.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(slideDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(slideDancer.step.callCount).to.be.equal(2);
    });
  });
});
