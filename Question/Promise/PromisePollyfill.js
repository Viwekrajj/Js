

const state = {
    PENDING:"pending",
    FULLFILLED:"fullfilled",
    REJECTED:"rejected",
}
  

class MyPromise{
    #value=undefined;
    #state=state.PENDING;
    #thenCB = [];
    #catchCB = [];

    constructor(callback){
       try{
        callback(this.#onSuccess,this.#onFail)
       }
       catch(err){
        this.#onFail(err)

       }
    }

    #onSuccess=(value)=>{
        if (this.#state !== state.PENDING) return;
        this.#state=state.FULLFILLED;
        this.#value=value;

        this.#runCallback();
        

    }
    #onFail=(value)=>{
        if (this.#state !== state.PENDING) return;
        this.#value=value;
        this.#state=state.REJECTED;
        this.#runCallback()


    }
    then = (thenCB) => {
        if (this.#state === state.FULLFILLED) {
            thenCB(this.#value);
        } else if (this.#state === state.PENDING) {
            this.#thenCB.push(thenCB);
        }
    }
    

    catch = (catchCB) => {
        if (this.#state === state.REJECTED) {
            thenCB(this.#value);
        } else if (this.#state === state.PENDING) {
            this.#catchCB.push(catchCB);
        }
    }
    

    #runCallback(){

        if(this.#state===state.FULLFILLED){
            this.#thenCB.forEach((cb)=>{
                cb(this.#value)

            })

        }
        if(this.#state===state.REJECTED){
            this.#catchCB.forEach((cb)=>{
                cb(this.#value)

            })
            
        }

    }

}

const promise = new Promise((res)=>{
    res("done 1")
})
promise.then((val)=>{
    console.log("executed",val)
})
const promise2 = new MyPromise((res)=>{
    res("done 2")
})
promise2.then((val)=>{
    console.log("executed",val)
})