// // Promise Timeout: Reject a promise if it takes too long. 
const timeout = 2000; // 2 seconds

const apiCall = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 3000);
  });
  

function PromiseTimeout(apiCall,timeout){
  return new Promise((resolve,reject)=>{
    const timer = setTimeout(()=> {
        reject(new Error("Operation timed out"));
    },timeout)
    apiCall
      .then((value) => {
        clearTimeout(timer);
        resolve(value);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });



  })
}

PromiseTimeout(apiCall, timeout)
  .then(console.log)
  .catch(console.error);


