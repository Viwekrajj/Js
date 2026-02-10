// Retry with Delay: Retry a failing async task N times with delay.




  let attemptCount = 0;

const task = () => new Promise((res, rej) => {
  attemptCount++;
  console.log("Attempt:", attemptCount);
  attemptCount < 3 ? rej("Fail") : res("Success");
});

retryWithDelay(task, 3, 1000)
  .then(console.log)
  .catch(console.error);


  function retryWithDelay(task, retries, delay) {
    return new Promise((resolve, reject) => {
      function attempt() {
        task()
          .then(resolve)
          .catch(err => {
            if (retries === 0) {
              reject(err);
            } else {
              retries--;
              setTimeout(attempt, delay);
            }
          });
      }
  
      attempt();
    });
  }
  
