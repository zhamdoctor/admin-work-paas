type Person={
    name:string,
    age:number,
    text:string
}

const proxy=(object:any,key:any)=>{
    return new Proxy(object,{
        get(target: any, p: string | symbol, receiver: any): any { //查找返回target对象的p属性
            return Reflect.get(target,p,receiver)
        },
        set(target: any, p: string | symbol, newValue: any, receiver: any): boolean {
            return Reflect.set(target,p,newValue,receiver)
        }
    })
}
const logAccess=<T>(object:T,key:keyof T):T=>{ //泛型和添加keyof限制
    return proxy(object,key)
}
let man:Person = logAccess({
    name: "小曼",
    age:11,
    text:"我的很大"
},'age')

//Partial Pick
type PartialCode<T>={  //Partial源码
    [P in keyof T]?:T[P] //遍历T,增加?,返回T中有的所有选项,其实就是增加了个?符号
}

type Per={
    name:string,
    age:number
}
type p=Partial<Per>
type pp={ //Per转成p之后都变成了可选参数
    name?:string|undefined;
    age?:number|undefined;
}

//keyof in ? T[P]
//keyof 将一个接口对象的全部属性取出来变成联合类型
//in 理解成for in P，就是key遍历,keyof T就是联合类型的每一项（T这个联合类型的每一项)
//T[P] 索引访问操作符,与js中访问属性值的操作类似

//Pick
type PickCode<T,K extends keyof T>={ //K继承T这个类型的每项
    [P in K]:T[P]; //遍历K中key，返回T中K有的key
}

type PerPick={
    name:string,
    age:number,
    text:string,
    address:string
}
type Ex="text"|"age"
type A=Pick<PerPick, Ex> //从PerPick中选取text和age属性作为A类型的属性

//readonly
type ReadonlyCode<T>={
    readonly [P in keyof T]:T[P] //遍历T，每个元素追加readonly，返回T
}

//record
type RecordCode<K extends keyof any,T>={
    [P in K]:T; //遍历K
}
//keyof any 返回string number symbol的联合类型
//in就是for in P,就是key的遍历,也就是string,number,symbol类型每一项遍历
//约束对象key的同时约束了value

//infer
//定义一个类型，如果是数组类型返回数组元素的类型[string]返回string类型，否则传入什么类型就返回什么类型
type Ori<T> =T extends Array<any>?T[number]:T //?
type AA=Ori<(boolean|string)[]> //传入一个数组
type B = Ori<null>
//用infer实现相同的逻辑，就不需要获取number下标,
type InferR<T> = T extends Array<infer U>?U:T
type III=InferR<(string|Symbol)[]>

//tuple元祖转换成union联合类型
//TupleToUni表示传入一个数组，返回数组中所有元素的联合类型
type TupleToUni<T> =T extends Array<infer E>?E:never
type TTuple=[string,number]
type ToUni=TupleToUni<TTuple>

//infer实例
//提取头部元素
type Arr=['a','b','c']
type First<T extends any[]>=T extends [infer First,...any[]]?First:[]
type a=First<Arr>

//提取尾部元素
type Last<T extends any[]>=T extends [...any[],infer Last]?Last:[]
//剔除头部元素
type FirstOut<T extends any[]> = T extends [unknown,...infer Rest]?Rest:[]
//剔除尾部元素
type LastOut<T extends any[]> = T extends [...infer Rest,unknown]?Rest:[]

//infer递归  数组反转
type ReverArr<T extends any[]>=T extends [infer First,...infer rest]?[...ReverArr<rest>,First]:T

