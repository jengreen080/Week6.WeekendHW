const assert = require('assert');
const Paint = require('../models/paint.js');

describe('Paint', function(){

    let paint;

    beforeEach(function (){
        paint_1 = new Paint(500, 450); 
    });
//Example 6
    xit('should have a number of litres of paint', function (){
        // expected = 450;
        // actual = paint.currentVolume;
        assert.strictEqual(actual, expected);
    });
//Example 7
    xit('should be able to check if it is empty', function (){
        assert.strictEqual(actual, expected);
    });
//Example 8
    xit('should be able to empty itself of paint', function (){
        assert.strictEqual(actual, expected);
    });
});