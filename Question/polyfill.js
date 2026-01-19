const arr =[1,2,3,4,5]
console.log(arr);
const temp = arr.map((data)=>data*2)
console.log(temp);

 Array.prototype.MyMap=function(callback){
    const  res =[]
    
    for(let i =0;i<this.length;i++)
    {
      res[i]=callback(this[i],i,this)
    }
    return res


 }
 const tem2 = arr.MyMap((data)=>data*2)
console.log(tem2);