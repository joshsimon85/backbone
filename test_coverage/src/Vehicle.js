function Vehicle(options) {
  this.make = options.make;
  this.model = options.model;
}

Vehicle.prototype.toString = function() {
  var make = this.make.slice(0,1).toUpperCase() + this.make.slice(1);
  var model = this.model.slice(0,1).toUpperCase() + this.model.slice(1);

  return make + ' ' + model;
};

Vehicle.prototype.honkHorn = function() {
  return 'Beep beep!';
};
