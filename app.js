class MathClass {
  add(a, b) {
    return a + b;
  }

  log() {
    console.log('hello message');
  }

  callAnonther(a, b) {
    this.log();
    return this.add(a, b);
  }

  somePromiseMethod() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(1), 1000);
    })
      .then((res) => res * 2)
      .catch((err) => console.log(err.message));
  }
}

module.exports = MathClass;
