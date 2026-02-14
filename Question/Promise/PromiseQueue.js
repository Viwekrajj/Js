// Promise Queue: Execute async tasks sequentially.

const tasks = [
    () => new Promise(res => {
      console.log("Start A");
      setTimeout(() => {
        console.log("End A");
        res("A");
      }, 1000);
    }),
  
    () => new Promise(res => {
      console.log("Start B");
      setTimeout(() => {
        console.log("End B");
        res("B");
      }, 800);
    }),
  
    () => new Promise(res => {
      console.log("Start C");
      setTimeout(() => {
        console.log("End C");
        res("C");
      }, 500);
    })
  ];

function PromiseQueue (tasks){
    new Promise((resolve,reject)=>{
        const results = [];
  
    for (let task of tasks) {
      const value =  task();  // waits before next
      results.push(value);
    }
  
    return results;

    })
}
// PromiseQueue(tasks)

// async function PromiseQueue(tasks) {
//     const results = [];
  
//     for (let task of tasks) {
//       const value = await task();  // waits before next
//       results.push(value);
//     }
  
//     return results;
//   }

  
  PromiseQueue(tasks).then(res => {
    console.log("Final:", res);
  });
  