describe('PartnerDancer', function() {
  var partnerDancer, clock;
  var timeBetweenSteps = 100;
  beforeEach(function() {
    clock = sinon.useFakeTimers();
    partnerDancer = new PartnerDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(partnerDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that runs nothing', function() {
    sinon.spy(partnerDancer.$node, 'toggleClass');
    partnerDancer.step();
    expect(partnerDancer.$node.toggleClass.called).to.be.false;
  });
  
  it ('should inherit the "height" property in the class "dancer" from superclass "dancer"', function () {
    var dancerCSS = partnerDancer.$node.css('height');
    expect(dancerCSS).to.exist;
  });
  
  it('should inherit the method "setPosition" from superclass Dancer', function() {
    expect (partnerDancer.setPosition).to.exist;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(partnerDancer, 'step');
      expect(partnerDancer.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(partnerDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(partnerDancer.step.callCount).to.be.equal(2);
    });
  });

  // describe ('click event on partnerButton', function() {
  //   var windowArr = window.partnerDancers;
  //   it ('should push two new elements to the window.partnerDancers array when clicked', function() {
  //     $('.partnerButton').trigger('click');
  //     expect(windowArr[0].length).to.be.equal(2);
  //   });
  // });
  
});