describe('ShimmyDancer', function() {
  var shimmyDancer, clock;
  var timeBetweenSteps = 100;
  beforeEach(function() {
    clock = sinon.useFakeTimers();
    shimmyDancer = new ShimmyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(shimmyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a not have a function to toogle class', function() {
    sinon.spy(shimmyDancer.$node, 'toggleClass');
    shimmyDancer.step();
    expect(shimmyDancer.$node.toggleClass.called).to.be.false;
  });
  
  it ('should inherit the "height" property in the class "dancer" from superclass "dancer"', function () {
    var dancerCSS = shimmyDancer.$node.css('height');
    expect(dancerCSS).to.exist;
  });
  
  it('should inherit the method "setPosition" from superclass Dancer', function() {
    expect (shimmyDancer.setPosition).to.exist;
  });


  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(shimmyDancer, 'step');
      expect(shimmyDancer.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(shimmyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(shimmyDancer.step.callCount).to.be.equal(2);
    });
  });
});
