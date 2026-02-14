const MyPromise = new Promise((resolve, reject) => {
    resolve("Success!");
    // reject("Reject!");

  });
  
  MyPromise.then((value)=>{
    setTimeout(()=>{
        console.log("Handled:1", value)
        
    },2000)
    return value
  }
   
  ).then(
    (value)=>{
        setTimeout(()=>{
            console.log("Handled:2", value)
           
        },1000)
    }
    
  );
  
  
  