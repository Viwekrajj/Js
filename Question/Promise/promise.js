const MyPromise = new Promise((resolve, reject) => {
    resolve("Success!");
    // reject("Reject!");

  });
  
  MyPromise.then(
    value => console.log("Handled:1", value),
    err => console.log("Rejected:", err)
  );
  MyPromise.then(
    value => console.log("Handled:2", value),
    err => console.log("Rejected:", err)
  );
  
  
  