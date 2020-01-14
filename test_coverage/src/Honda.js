function Honda(model) {
  this.models = ["Accord", "Civic", "Crosstour", "CR-V", "CR-Z", "Fit", "HR-V", "Insight", "Odyssey", "Pilot"];

  if (this.verify(model)) {
    this.make = 'Honda';
    this.model = model;
    this.price = Honda.getPrice(model);
  } else {
    throw new Error("Model " + model + " does not exist");
  }
}

(function() {
  const models = [
    "Accord", "Civic", "Crosstour", "CR-V", "CR-Z", "Fit", "HR-V", "Insight",
    "Odyssey", "Pilot"
  ];
  const prices = [
    16500, 4500, 21000, 15800, 12000, 13100, 16000, 18100, 22500, 19300
  ];

  Honda.prototype = Object.create(Vehicle.prototype);

  Honda.prototype.constuctor = Honda;

  Honda.prototype.verify = function(model)  {
    model = model.slice(0,1).toUpperCase() + model.slice(1);

    return models.includes(model);
  };

  Honda.getModels = function() {
    return models.slice();
  };

  Honda.getPrice = function(model) {
    var index;

    model = model.slice(0,1).toUpperCase() + model.slice(1);
    index = models.indexOf(model);

    return prices[index];
  };
})();
