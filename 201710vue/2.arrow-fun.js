//this arguments
//自己家没有this就找上一级的this

//如何更改this指向
//call,apply,bind
//var that=this;
//=>

//如何确定this是谁  看谁调用的.前面是谁this就是谁

//function a(b){
//    return b+1;
//}

//let a=b=>b+1;
//
//console.log(a(1));

let a = b=>c=>b + c;//高阶函数(大于等于两个剪头的)
console.log(a(1)(2));
