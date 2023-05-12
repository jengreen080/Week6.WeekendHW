const assert = require('assert');
const Room = require('../models/room.js');

describe('Room', function(){

    let room;

    beforeEach(function (){
        room = new Room();

    });
//Example 9
    xit('should have an area in square meters', function (){
        assert.strictEqual(actual, expected);
    })
//Example 10
    xit('should start not painted', function (){
        assert.strictEqual(actual, expected);
    })
//Example 11
    xit('should be able to be painted', function (){
        assert.strictEqual(actual, expected);
    })
})