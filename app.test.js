const { expect } = require('chai');
const sinon = require('sinon');
const MathClass = require('./app');

it('spy example', () => {
  let obj = new MathClass();

  let spy = sinon.spy(obj, 'add');

  obj.callAnonther(4, 5);

  expect(spy.calledWith(4, 5)).to.be.true;
});

it('mock example', () => {
  let obj = new MathClass();

  let mock = sinon.mock(obj);
  let expecations = mock.expects('log');
  expecations.exactly(1);

  obj.callAnonther(4, 5);
  mock.verify();
});

it('stub example', () => {
  let obj = new MathClass();

  let stub = sinon.stub(obj, 'add');
  stub.withArgs(3, 4).returns(100);
  expect(obj.callAnonther(3, 4)).to.be.equal(100);
});

it('promise', (done) => {
  this.timeout(5000);
  let obj = new MathClass();

  obj.somePromiseMethod().then((val) => {
    expect(val).to.be.equal(2);
    done();
  });
});
