const assert = require('assert');
const Decorator = require('../models/decorator.js');
const Paint = require('../models/paint.js');
const Room = require('../models/room.js');

describe('Decorator', function(){

    let decorator;

    beforeEach(function (){
        decorator = new Decorator();
    });

//Example 1
    it('should start with an empty paint stock', function (){
        const expected = []
        const actual = decorator.paintStock
        assert.deepStrictEqual(actual, expected);
    })

//Example 2
    it('should be able to add a can of paint to paint stock', function (){
        dulux = new Paint(0.5, 0.35)
        decorator.addPaintToStock(dulux)

        const expected = [dulux]
        const actual = decorator.paintStock
        assert.deepStrictEqual(actual, expected);
    })

//Example 3
    it('should be able to calculate total litres paint it has in stock', function (){
        dulux = new Paint(0.5, 0.35);
        wicks = new Paint(1.0, 1.0);

        decorator.addPaintToStock(dulux)
        decorator.addPaintToStock(wicks)

        const expected = 1.35;
        const actual = decorator.totalVolumeOfPaint();
        assert.deepStrictEqual(actual, expected);
    })

//Example 4
    it('should be able to calculate whether is has enough paint to paint a room', function (){
        dulux = new Paint(0.5, 0);
        wicks = new Paint(1.0, 1.0);
        room = new Room(10, 0)

        decorator.addPaintToStock(dulux)
        decorator.addPaintToStock(wicks)

        const areaToBePainted = room.areaToBePainted()
        const totalVolumeOfPaint = decorator.totalVolumeOfPaint()

        
        const expected = "you don't have enough paint"
        const actual = decorator.isThereEnoughPaintForTheRoom(areaToBePainted, totalVolumeOfPaint)
        assert.strictEqual(actual, expected);
    })

//Example 5
it('should be able to paint room if has enough paint in stock', function (){
    dulux = new Paint(0.5, 0);
    wicks = new Paint(1.0, 1.0);
    room = new Room(10, 0)

    decorator.addPaintToStock(dulux)
    decorator.addPaintToStock(wicks)
    const areaToBePainted = room.areaToBePainted()
    const totalVolumeofPaint = decorator.totalVolumeOfPaint()
    const isThereEnoughPaintForTheRoom = isThereEnoughPaintForTheRoom(areaToBePainted, totalVolumeofPaint)
    
    const expected = 10
    const actual = room.actuallyPaintTheRoom(isThereEnoughPaintForTheRoom, areaToBePainted)
    assert.strictEqual(actual, expected);
})



    // it('should be able to paint room if has enough paint in stock', function (){
    //     dulux = new Paint(0.5, 0);
    //     wicks = new Paint(1.0, 1.0);
    //     room = new Room(10, 0)

    //     decorator.addPaintToStock(dulux)
    //     decorator.addPaintToStock(wicks)
    //     const areaToBePainted = room.areaToBePainted()
    //     const totalVolumeOfPaint = decorator.totalVolumeOfPaint()

    //     const isThereEnoughPaint = decorator.isThereEnoughPaintForTheRoom(areaToBePainted, totalVolumeOfPaint)
    //     // const canWePaintTheRoom = canWePaintTheRoom(isThereEnoughPaint)
        
    //         if (isThereEnoughPaint === "you have enough paint"){
    //             room.paintTheRoom(areaToBePainted)}
    //             // room.paintTheRoom(areaToBePainted)

    //     expected = 10
    //     actual = room.areaPainted

    //     assert.strictEqual(actual, expected);
    // })

})