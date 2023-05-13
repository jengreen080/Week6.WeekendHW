const assert = require('assert');
const Paint = require('../models/paint.js');

describe('Paint', function(){

    let paint_1;
    let paint_2;

    beforeEach(function (){
        paint_1 = new Paint(500, 450);
        paint_2 = new Paint(1000, 0) 
    });

//Example 6 /// passes
    it('should have a number of litres of paint', function (){
        expected = 450;
        actual = paint_1.currentVolume;
        assert.strictEqual(actual, expected);
    });
    
//Example 7a
    it('should be able to check if it is empty', function (){
        expected = "empty";
        actual = paint_2.checkIfPaintIsEmpty()
        assert.strictEqual(actual, expected);
    });

//Example 7b
it('should be able to check if it has paint', function (){
    expected = "not empty";
    actual = paint_1.checkIfPaintIsEmpty()
    assert.strictEqual(actual, expected);
});

//Example 8
    xit('should be able to empty itself of paint', function (){
        assert.strictEqual(actual, expected);
    });
});

