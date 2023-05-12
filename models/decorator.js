const Decorator = function(){
    this.paintStock = [] 
}

Decorator.prototype.addPaintToStock = function(newPaint){
    this.paintStock.push(newPaint);
}

Decorator.prototype.totalVolumeOfPaint = function(nextPaint){
    this.paintStock.currentVolume.reduce((count, nextPaint) => count + nextPaint.currentVolume, 0);
}

module.exports = Decorator;