let arr=[1,2,3,4,5];
arr.b="100";
for (let i = 0; i < arr.length; i++) {//编程式
    console.log(arr[i]);
}


//不支持return ,
arr.forEach((item,index)=>{//声明式
    console.log(item, index);
});

//for forEach for in for of区别
for (let key in arr) {//key会变成字符串类型，包括数组的私有属性也可以打印出来
    console.log(arr[key]);
}

for(let val of arr){//支持return 并且是值of数组(不能遍历对象)
    console.log(val);
}

//object.keys讲对象的key作为新的数组
let obj={school:'nihao',age:8};
for(let val of Object.keys(obj)){
    console.log(obj[val]);
}

//filter 是否操作元数组 返回结果：过滤后的新数组，回调函数的返回结果:
// 如果返回true 表示这一项放到新数组中(面试题1===1===1//结果为false)
let newArr=[1,2,3,4,5].filter((item,index)=>{
    return item>2&&item<5;
})
console.log(newArr);

//map 映射  将原有的数组映射成一个新数组[1,2,3]  不操作元数组，返回的是回调函数中
// 返回什么这一项是什么
let arr1=[1,2,3].map((item,index)=>{
    return `<li>${item}</li>`
});
console.log(arr1);
console.log(arr1.join(''));

let arr2=[1,2,3,4,55,555];
console.log(arr2.includes(5));//返回的是boolean类型

//返回找到的那一项，不会改变原数组，回调函数中返回true表示找到了，找到后性质循环,
//找不到返回undefined
let result=arr2.find((item,index)=>{
    return item.toString().indexOf(5)>-1;
});

console.log(result);


//some every
//some 找true
//every 找false


//reduce 收敛 4个参数() 返回的是叠加后的结果，原数组不变 回调函数返回的结果：item是元数组
//prev 代表数组的第一项，next代表数组的第二项
//第二次prev是undefined，next是数组的第三项
let sum1=[1,2,3,4,5].reduce((prev,next,index,item)=>{
    return prev+next;//本次的返回值会作为下一次的prev
})
console.log(sum1);


let sum=[{price:30,count:2},{price:30,count:3},{price:30,count:4}].reduce((prev,next)=>{
    return prev+next.price*next.count;
},0);//这是0是默认指定第一次的prev
console.log(sum);

let arr3=[[1,2,3],[4,5,6],[7,8,9]];
console.log(arr3.toString());
let flat=[[1,2,3],[4,5,6],[7,8,9]].reduce((prev,next)=>{
    return prev.concat(next);
});
console.log(flat);

