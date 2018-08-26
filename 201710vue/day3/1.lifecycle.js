
const vm = new Vue({ //初始化的时候会调用很错方法，这些方法我们叫做钩子函数

    data: {

    },


}).$mount('#app');


//声明周期：beforeCreate created
//beforeMount mounted
//beforeUpdate updated
//beforeDestroy destroyed
//够有十个

//beforeCreate 钩子函数只是初始化了vue实例上自己的方法，
//Created 钩子函数data，和methods都已经挂载完成了，（可以用来获取ajax,初始化操作）
//beforeMount 钩子函数，如果没有el的话代码就会停止。没有什么实际的意义
//Mounted 钩子函数，真实dom渲染完成了，可以操作dom。
//beforeUpdate 当数据更新之前会调用这个函数(只是页面依赖的数据变化才会走这个方法)
//updated (一般用watch来替换)
//beforeDestroy 死了之后将会移除监但是methods中的方法还在(销毁前可以清除定时器和事件解绑)