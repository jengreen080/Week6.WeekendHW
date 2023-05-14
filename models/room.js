const Room = function(area, areaPainted){
    this.area = area
    this.areaPainted = areaPainted 
}

// Room function 1
Room.prototype.paintTheRoom = function(area){
    this.areaPainted += area
}

// Room function 2
Room.prototype.areaToBePainted = function(){
    return this.area - this.areaPainted
    }

// Room function 2
Room.prototype.actuallyPaintTheRoom = function(boolean, area){
    if (boolean === "you have enough paint"){
        return this.areaPainted += area
    }
}


module.exports = Room;