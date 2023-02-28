const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = []
}

Park.prototype.addDinosaurToCollection = function(dinosaur) {
    this.collectionOfDinosaurs.push(dinosaur)
}

module.exports = Park