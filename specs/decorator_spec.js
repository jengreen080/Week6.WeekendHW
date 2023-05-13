const assert = require('assert');
const Decorator = require('../models/decorator.js');
const Paint = require('../models/paint.js');

describe('Decorator', function(){

    let decorator;

    beforeEach(function (){
        decorator = new Decorator();

    });
//Example 1
    it('should start with an empty paint stock', function (){
        expected = []
        actual = decorator.paintStock
        assert.deepStrictEqual(actual, expected);
    })
//Example 2
    it('should be able to add a can of paint to paint stock', function (){
        const dulux = new Paint(500, 350)
        const expected = [dulux]
        decorator.addPaintToStock(dulux)
        const actual = decorator.paintStock
        assert.deepStrictEqual(actual, expected);
    })
//Example 3
//// skipped for now
    it('should be able to calculate total litres paint it has in stock', function (){
        dulux = new Paint(500, 350);
        wicks = new Paint(1000, 1000);
        decorator.addPaintToStock(dulux)
        decorator.addPaintToStock(wicks)
        const expected = 1350;
        const actual = decorator.totalVolumeOfPaint();
        assert.deepStrictEqual(actual, expected);
    })
//Example 4
    xit('should be able to calculate whether is has enough paint to paint a room', function (){
        assert.strictEqual(actual, expected);
    })
//Example 5
    xit('should be able to paint room if has enough paint in stock', function (){
        assert.strictEqual(actual, expected);
    })

})