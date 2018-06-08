//mocha用describe来描述一组测试内容
//用it方法来描述一个单独的测试用例
var chai = require('chai');
var expect = chai.expect;

describe('some simple tests',function(){
    it('test equal',function(){
        expect(4+5).to.equal(9);
    })
    it('test not equal',function(){
        expect(4+5).to.not.equal(10);
    })
    it('test to be true',function(){
        expect(true).to.be.true;
    })
    it('test object equal',function(){
        //===
        expect({'name':'viking'}).to.not.equal({'name':'viking'});
        //使用deep以后，不是比较引用，而是比较值是否一一相等
        expect({'name':'viking'}).to.deep.equal({'name':'viking'});
    })
})