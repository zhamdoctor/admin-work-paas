let myPhone:number|string="a23e"

interface People{
    age:number,
    height:number
}
interface Man{
    sex:string
}
const xiaoman=(man:People&Man)=>{ //联合类型
    //age,height,sex都可以用
}


interface A{
    run:string
}
interface B{
    build:string
}



const fn=(type: A|B):string=>{
    (type as A).run //类型断言判断传入的是A接口的值
    return "build" in type ? type.build : ""
}

//as count
//普通类型则跟const一样
let nameXiaoman=['小曼'] as const //const name='小曼' 无法修改 as any as const as string
// nameXiaoman.unshift('da') //数据无法修改

function toBoolean(something:any):boolean{
    return something as boolean;
}


//抽象类
abstract class A{
    name:string

    constructor(name: string) {
        this.name = name;
    }
    abstract getName():string
}

class B extends A{

    constructor(name: string) {
        super(name);
    }
//必须实现这个抽象方法才行，不然报错
    getName(): string {
        return "";
    }

}

