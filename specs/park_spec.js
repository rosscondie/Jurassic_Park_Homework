const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park("Jurassic Park", 10);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaurToCollection("Stegosauraus");
    const actual = park.collectionOfDinosaurs.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaurToCollection("Diplodocus");
    park.addDinosaurToCollection("Triceratops");
    park.removeDinosaurFromCollection("Diplodocus");
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, ["Triceratops"]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    let dinosaur1 = park.addDinosaurToCollection("Triceratops", "Herbivore", 100);
    let dinosaur2 = park.addDinosaurToCollection("T-Rex", "Carnivore", 500);
    const actual = park.findDinosaurThatAttractsMostVisitors();
    assert.deepStrictEqual(actual, dinosaur2)
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
