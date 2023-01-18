//类型别名
type str = string|number
let s:str="dsad"

type strr=()=> string
let ss:strr=()=>"小曼"

type value=boolean|0|'123'
let sss:value=0

//never类型:表示不应该存在的状态
function loop():never{
    while (true){} //永远无法返回
}
function error(msg:string):never{
    throw new Error(msg); //error永远不会有返回值
}

//void只是没返回值，不会出错,never会抛出异常

interface A{type: "foo"}
interface B{type:"bar"}
type All=A|B;
function handle(val:All){
    switch (val.type){
        case 'foo':
            break;
        case 'bar':
            break;
        default:
            const ex:never=val;
            break
    }
}
//任何类型都不能赋值给never类型的变量,当存在进入default分支可能时,ts类型检查会及时帮我们发现这个问题
//如果新增一个c接口,必须手动找到switch所有代码并处理，容易引入bug。所以在类型检查阶段，检查A,B接口，如果新增了C接口会有进入default逻辑的可能，类型检查时就会发现并报错，类型检查阶段就能发现问题



//Symbol

interface Item{
    age:number,
    name:string
}
const array:Array<Item> =[{age:21,name:"dsadsa"}]
type mapTypes=string|number
const map:Map<mapTypes,mapTypes>=new Map()
map.set("sdas","dasda")

let set:Set<number>=new Set([1,2,324])
// const gen=(er:any):void=>{
//     let it:Iterator<any>=er[Symbol.iterator]()
//     let next:any={done:false}
//     while (!next.done){
//          next1 = it.next();
//          if (!next1.done){
//
//          }
//     }
// }