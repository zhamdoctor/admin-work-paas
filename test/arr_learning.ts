//数组泛型
import user from "../src/store/modules/user";

let arr:Array<number>=[1,2,3]



interface NumberArray{
    [index:number]:number;
}
let fib:NumberArray=[1,2,3,4]

//函数扩展
const fn=(name:string="默认值",age?:number):string=>{
    return name+age
}

//接口定义函数
interface Add{
    //限定入参出餐，函数名不定
    (num:number,num2:number):number
}
//限定interface的函数
const fnn:Add=(num:number,num2:number):number=>{
    return num+num2
}

interface User{
    name:string;
    age:number;
}
function getUserInfo(user :User):User{
    return user
}


