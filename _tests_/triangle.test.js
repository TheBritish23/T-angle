import { Triangle } from './../src/triangle.js';

describe('Triangle', () => {

Triangle.prototype.checkType = function() {
  return "not a triangle";
};

  test('should correctly create a triangle object with three lengths', () => {
    var triangle = new Triangle(2,4,5);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
    expect(value1).toEqual(value2);
  });
});
