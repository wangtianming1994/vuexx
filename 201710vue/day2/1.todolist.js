const vm = new Vue({
    el: '#app',
    data: {
        todos:[
            {isSelect:false,title:'睡觉'},
            {isSelect:false,title:'吃饭'},
        ],
        contor:'',
        current:'',
        hash:''
    },

    created(){
        this.todos=JSON.parse(localStorage.getItem('data')) || this.todos;
        //监控hash值的变化

        //
        this.hash=window.location.hash.slice(1)|| 'all';
        window.addEventListener('hashChange',()=>{
            console.log(123);
            this.hash=window.location.hash.slice(1)
        },false)
    },
    computed:{
        count(){
           return  this.todos.filter(item=>!item.isSelect)
        }
    },
    watch:{//默认只监控一层的数据变化，就是给数组中的某一个对象改变了就不会监控到，类似于isSelect:true
        /*todos(newVal,oldVal){

        }*/
        todos:{
            handler(){//默认写成函数 就相当于默认写了个handler
                //localStorage默认存的是字符串
                localStorage.setItem('data',JSON.stringify(this.todos));
            },deep:true//表示是否深度监控
        }
    },
    methods:{
        add(){
            this.todos.push({isSelect:false,title:this.contor});
            this.contor="";
        },
        del(e,i){
            console.log(i);
            this.todos=this.todos.filter((item,index)=>{
                console.log(item,item==i);
                return item!==i
            });
        },
        remember(item){//当前点击的那一项
            this.current=item;
        },
        cancel(){
            this.current="";
        }
    },
    directives:{
        focus(el,bindings){

            if(bindings.value){//当点击当前li是让内部的输入框获取焦点

                el.focus();//获取焦点
            }
        }
    }

});

//将数据循环到页面上
//敲回车时添加新的数据
//删除功能