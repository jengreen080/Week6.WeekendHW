const assert = require('assert');
const Room = require('../models/room.js');

describe('Room', function(){

    let room;

    beforeEach(function (){
        room = new Room(10, 0);

    });

//Example 9
    it('should have an area in square meters', function (){
        const expected = 10
        const actual = room.area
        assert.strictEqual(actual, expected);
    })

//Example 10
    it('should start not painted', function (){
        const expected = 0
        const actual = room.areaPainted
        assert.strictEqual(actual, expected);
    })

//Example 11
    it('should be able to be painted', function (){
        room.paintTheRoom(5)
        const expected = 5
        const actual = room.areaPainted
        assert.strictEqual(actual, expected);
    })
})