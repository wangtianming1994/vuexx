console.log(Promise);
let p=new Promise((resolve,reject)=>{
    resolve();
})

p.then((res)=>{},(err)=>{});

//promise的事例就有一个then方法，then方法中有两个参数，一个是resolve,reject.