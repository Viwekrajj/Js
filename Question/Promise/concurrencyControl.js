// An array of async tasks, where each task is a function that returns a Promise.
// A number K, representing the maximum number of Promises that can run concurrently.
// Your task is to implement a function runWithConcurrency(tasks, k) that:
// Runs at most K promises at any given time
// Starts a new task as soon as one finishes
// Resolves with an array of results in the same order as the input tasks
// Rejects immediately if any task rejects

const tasks = [
    () => new Promise(res => {
      console.log("Start A");
      setTimeout(() => {
        console.log("End A");
        res("A");
      }, 3000);
    }),
    () => new Promise(res => {
      console.log("Start B");
      setTimeout(() => {
        console.log("End B");
        res("B");
      }, 2000);
    }),
    () => new Promise(res => {
      console.log("Start C");
      setTimeout(() => {
        console.log("End C");
        res("C");
      }, 1000);
    }),
    () => new Promise(res => {
      console.log("Start D");
      setTimeout(() => {
        console.log("End D");
        res("D");
      }, 4000);
    })
  ];
  
  
  const k = 2;


  function runWithConcurrency(tasks, k) {
    return new Promise((resolve, reject) => {
      const results = [];
      let index = 0;
      let running = 0;
      let completed = 0;
  
      function runNext() {
        // all tasks done
        if (completed === tasks.length) {
          resolve(results);
          return;
        }
  
        // start tasks while we have capacity
        while (running < k && index < tasks.length) {
          const currentIndex = index;
          const task = tasks[index];
          index++;
          running++;
  
          task()
            .then(value => {
              results[currentIndex] = value;
            })
            .catch(reject)
            .finally(() => {
              running--;
              completed++;
              runNext(); // start next task
            });
        }
      }
  
      runNext();
    });
  }

  runWithConcurrency(tasks, 1)
  .then(result => {
    console.log("Final result:", result);
  })
  .catch(err => {
    console.error("Error:", err);
  });

  