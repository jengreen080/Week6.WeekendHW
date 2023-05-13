const Decorator = function(){
    this.paintStock = [] 
}

Decorator.prototype.addPaintToStock = function(newPaint){
    this.paintStock.push(newPaint);
}

///// not currently working
Decorator.prototype.totalVolumeOfPaint = function(){
    return this.paintStock.reduce((totalPaint, paint) => {
        return totalPaint += paint.currentVolume;
    }, 0);
}

module.exports = Decorator;