const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = []
}

Park.prototype.addDinosaurToCollection = function(dinosaur) {
    this.collectionOfDinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaurFromCollection = function (dinosaur) {
    const indexOfDinosaur = this.collectionOfDinosaurs.indexOf(dinosaur)
    this.collectionOfDinosaurs.splice(indexOfDinosaur, 1)
}

// Use a for loop to loop through collection to find dinosaur with most visitors
Park.prototype.findDinosaurThatAttractsMostVisitors = function () {
    
}
module.exports = Park