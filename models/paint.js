const Paint = function(capacity, currentVolume){
    this.capacity = capacity;
    this.currentVolume = currentVolume;
}

// Paint function 1
Paint.prototype.checkIfPaintIsEmpty = function(){
    if (this.currentVolume === 0) {
        return "empty"
    } else {
        return "not empty"
    }
}

// Paint function 2
Paint.prototype.emptyThePaint = function(){
    if (this.currentVolume > 0) {
        this.currentVolume = 0
    }
}


module.exports = Paint;