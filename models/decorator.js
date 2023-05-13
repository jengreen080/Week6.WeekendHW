const Decorator = function(){
    this.paintStock = [] 
}

// function 1
Decorator.prototype.addPaintToStock = function(newPaint){
    this.paintStock.push(newPaint);
}

// function 2
Decorator.prototype.totalVolumeOfPaint = function(){
    return this.paintStock.reduce((totalPaint, paint) => {
        return totalPaint += paint.currentVolume;
    }, 0);
}

module.exports = Decorator;