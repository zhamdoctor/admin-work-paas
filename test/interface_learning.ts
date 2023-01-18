interface Person{
    a:string,
    b:string
}

const person:Person ={ //所有参数都要和接口一致
    a:"123",
    b:"das"
}

//interface合并
interface A{name?:string}
interface A{age?:number}
var x:A={name:"dasda",age:20}

//继承
interface A{
    name?:string
}
interface B extends A{
    age:number
}
let obj:B={
    name:"dasd",
    age:12,
}

//添加任意属性
interface Animal{
    b?:string
    readonly a:string, //只读函数，不允许重新赋值
    [propName:string]:any;
    cb():void
}

const per:Animal={
    a:"123",
    c:"qeqweq", //虽然interface没有定义c，但定义了propName允许添加新的任意属性
    cb:():void=>{
        console.log("callback")
    }
}
