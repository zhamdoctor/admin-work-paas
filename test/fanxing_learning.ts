function Add<T,U>(a:T,b:U):Array<T|U>{
    const params:Array<T|U>=[a,b]
    return params
}

Add<Boolean,number>(false,1)


//泛型接口
interface MyInter<T>{
    (arg:T):T
}

function fn<T>(arg:T):T{
    return arg
}
let result:MyInter<number>=fn

//对象字面量泛型
let foo:{<T>(arg:T):T}

foo=function <T>(arg:T):T{
    return arg
}
foo(123)


//泛型约束
interface Len{
    length:number
}
function getLength<T extends Len>(arg:T){
    return arg.length
}
getLength<string>('123')

//联合类型
function prop<T,K extends keyof T>(obj:T,key:K){
    return obj[key]
}
prop({a:1,b:2},'a') //'a必须存在于obj的key中


//泛型类
class Sub<T>{
    attr:T[]=[];
    add(a:T):T[]{
        return [a]
    }
}

var sub = new Sub<number>();
