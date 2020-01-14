describe('Vehicle Constructor', function() {
  beforeEach(function() {
    honda = new Vehicle({make: 'honda', model: 'accord'});
  });

  it('creates a new Vehicle instance', function() {
    expect(honda).toBeInstanceOf(Vehicle);
  });

  describe('Vehicle#toString', function() {
    it('returns the string "MAKE MODEL"', function() {
      expect(honda.toString()).toEqual('Honda Accord');

      honda.make = 'ford';
      expect(honda.toString()).toEqual('Ford Accord');
    });
  });

  describe('Vehicle#honkHorn', function() {
    it('logs the string "Beep beep!"', function() {
      expect(honda.honkHorn()).toMatch(/Beep/);
    });
  });
});
