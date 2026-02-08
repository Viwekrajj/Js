// You are given an array containing Promises and/or normal values.
// Implement a function promiseAll(iterable) that behaves exactly 
// like JavaScript’s native Promise.all.
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

const arr = [promise1,promise2,promise3];

function PromiseAll(arr) {
  return new Promise((resolve, reject) => {
    const res = [];
    let completed = 0;

    if (arr.length === 0) {
      resolve([]);
      return;
    }

    arr.forEach((item, index) => {
      Promise.resolve(item) // handles non-promises like 42
        .then(value => {
          res[index] = value;   // maintain order
          completed++;

          if (completed === arr.length) {
            resolve(res);
          }
        })
        .catch(reject); // reject immediately
    });
  });
}


const data = PromiseAll(arr);
console.log(data)