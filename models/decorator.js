const Decorator = function(){
    this.paintStock = [] 
}

// Decorator function 1
Decorator.prototype.addPaintToStock = function(newPaint){
    this.paintStock.push(newPaint);
}

// Decorator function 2
Decorator.prototype.totalVolumeOfPaint = function(){
    return this.paintStock.reduce((totalPaint, paint) => {
        return totalPaint += paint.currentVolume;
    }, 0);
}

// Decorator function 3
Decorator.prototype.isThereEnoughPaintForTheRoom = function(area, amountOfPaint){
    if (area < amountOfPaint) {
        return "you have enough paint"
    } else {
        return "you don't have enough paint"
    }
}


// Decorator.prototype.canWePaintTheRoom = function(boolean){
//     if (boolean === "you have enough paint") {
//         return True
//     }
//     }

module.exports = Decorator;