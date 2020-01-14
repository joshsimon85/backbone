describe('Honda Constructor', function() {
  var car = new Honda('Civic');

  it('creates a new instance when the model is valid', function() {
    expect(car).toBeInstanceOf(Honda);
  });

  it('does not create a new new instance when the model is not valid', function() {
    var invalidCar = function() { new Honda('f150'); };
    expect(invalidCar).toThrowError(Error, "Model f150 does not exist");
  });

  it ('defines a list of models and has a length of 10', function() {
    expect(Honda.getModels()).toBeDefined();
    expect(Honda.getModels().length).toEqual(10);
  });

  it ('defines a list of models that contains accord', function() {
    expect(car.models).toContain('Accord');
  });

  it ('calls get price when a new car is created', function() {
    var car;

    spyOn(Honda, 'getPrice');
    car = new Honda('civic');

    expect(Honda.getPrice).toHaveBeenCalled();
    expect(Honda.getPrice).toHaveBeenCalledWith('civic');
  });

  describe('Honda#getPrice', function() {
    it('returns the price of a given model', function() {
      var car = new Honda('civic');
      var crz = new Honda('CR-Z');

      expect(Honda.getPrice('civic')).toBeLessThan(15000);
      expect(car.price).toBeGreaterThan(0);
      expect(crz.price).toBeGreaterThan(10000);
    });
  });

  describe('Honda#getString', function() {
    it('returns the name and model', function() {
      expect(car.toString()).toBe('Honda Civic');
    });

    it('does not have its own toString prop', function() {
      expect(Object.getOwnPropertyNames(car)).not.toContain('toString');
    });
  });
});
