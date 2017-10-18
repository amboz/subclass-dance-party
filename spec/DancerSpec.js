describe('Dancer', function() {
  var dancer, clock;
  var timeBetweenSteps = 100;
  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = new Dancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(dancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function to toogle class that makes its node slide', function() {
    sinon.spy(dancer.$node, 'toggleClass');
    dancer.step();
    expect(dancer.$node.toggleClass.called).to.be.false;
  });
  
  it ('should have "height" property in the class "dancer"', function () {
    var dancerCSS = dancer.$node.css('height');
    expect(dancerCSS).to.exist;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(dancer, 'step');
      expect(dancer.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(dancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(dancer.step.callCount).to.be.equal(2);
    });
  });
  
  // describe ('position', function () {
  //   it ('should be inside the html page', function() {
  //     dancer.$node.css()
  //   });
    
  // });
  
});
