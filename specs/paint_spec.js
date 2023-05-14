const assert = require('assert');
const Paint = require('../models/paint.js');

describe('Paint', function(){

    let paint_1;
    let paint_2;

    beforeEach(function (){
        paint_1 = new Paint(0.5, 0.45);
        paint_2 = new Paint(1.0, 0) 
    });

//Example 6 /// passes
    it('should have a number of litres of paint', function (){
        const expected = 0.45;
        const actual = paint_1.currentVolume;
        assert.strictEqual(actual, expected);
    });
    
//Example 7a
    it('should be able to check if it is empty', function (){
        const expected = "empty";
        const actual = paint_2.checkIfPaintIsEmpty()
        assert.strictEqual(actual, expected);
    });

//Example 7b
    it('should be able to check if it has paint', function (){
        const expected = "not empty";
        const actual = paint_1.checkIfPaintIsEmpty()
        assert.strictEqual(actual, expected);
});

//Example 8
    it('should be able to empty itself of paint', function (){
        paint_1.emptyThePaint()
        const expected = 0
        const actual = paint_1.currentVolume
        assert.strictEqual(actual, expected);
    });
});

