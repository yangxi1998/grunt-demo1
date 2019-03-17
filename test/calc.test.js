var rectangle=require('../calc.js');
var expect=require('chai').expect;
describe("面积计算功能",function(){
  it('宽是10，高是20，面积是200',function(){
     var rect=rectangle();
     expect(rect.area(10,20)).to.be.equal(200);
  });
})
