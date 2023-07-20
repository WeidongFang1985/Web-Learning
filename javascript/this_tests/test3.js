const car = {
  brand: 'Toyota',
  getBrand: function () {
    return this.brand;
  },
};

const anotherCar = { brand: 'Honda' };
anotherCar.getBrand = car.getBrand;

console.log(anotherCar.getBrand());
