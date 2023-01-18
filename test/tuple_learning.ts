let arr:[number,string]=[1,"字符串"]
let arr2: readonly [number,boolean,string,undefined] = [1,true,'string',undefined]
//元组可以把多个元素作为一个单元传递.一个方法需要返回多个值，可以把多个值作为元组返回,不需要创建额外的类

let excel:[string,string,number,string][]=[
    ['title','name',1,'123']
]

enum Types{ //不写的话默认从0开始增长,Red=1可以自己定义增长初始值
    Red,
    Green,
    Blue
}

enum Types{
    Redd='red',
    Greenn='green',
    Bluee='blue'
}

enum TypesN{
    yyds,
    dddd
}
interface A{
    red: TypesN.yyds
}

let obj:A={
    red:TypesN.yyds
}