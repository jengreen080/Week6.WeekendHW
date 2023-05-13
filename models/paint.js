const Paint = function(capacity, currentVolume){
    this.capacity = capacity;
    this.currentVolume = currentVolume;
}

Paint.prototype.checkIfPaintIsEmpty = function(){
    if (this.currentVolume === 0) {
        return "empty"
    } else {
        return "not empty"
    }
}

module.exports = Paint;