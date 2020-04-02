import { Triangle } from './../src/triangle.js';

describe('Triangle', () => {

  test('should correctly create a triangle object with three lengths', () => {
    var triangle = new Triangle(2,4,5);
    var scalTriangle = new Triangle(4,5,7)
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
    expect(value1).toEqual(value2);
    expect(scalTriangle.checkType()).toEqual("scalene triangle");
  });
});
