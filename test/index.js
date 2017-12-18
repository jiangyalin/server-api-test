var p1 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Hello");
  }, 5000);
});

var p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("World");
  }, 1000);
});

var p3 = function (resolve, reject) {
  setTimeout(function () {
    console.log('p3')
    return 'ddd'
  }, 1000);
};

Promise.all([p1, p2])
  .then((result) => {
    console.log(result); // ["Hello", "World"]
    console.log('pppp'); // ["Hello", "World"]
  }, (reject) => {
    console.log(reject)
  })
  // .then(p3)
  .then(function (result) {
    console.log('d', result)
  });

Promise.all([p1, p2])
  .then((result) => {
    console.log(result); // ["Hello", "World"]
    console.log('pppp'); // ["Hello", "World"]
  }, (reject) => {
    console.log(reject)
  })
  // .then(p3)
  .then(function (result) {
    console.log('d', result)
  });