// //声明文件
// //package.json中声明types:"index.d.ts"
// //在xx.d.ts文件中声明declare const express:()=>any自定义声明
// //一般第三方包都有声明文件，直接declare const axios:AxiosStatic;
//
// //对象混入:
// //Object.assign(peo,peo1,peo2) 等效于peo&peo1&peo2,将三个对象内的字段合并起来了
//
//
// //装饰器
// //开启:experimentalDecorators: true
// //装饰器分为类装饰器,方法装饰器,访问符装饰器,属性装饰器,参数装饰器
// const watcher:ClassDecorator=(target:Function)=>{
//     target.prototype.getParams=<T>(param:T):T=>{
//         return param
//     }
// }
//
// const watchName=(name:string):ClassDecorator=>{
//     return (target:Function)=>{ //class A的构造函数就是target:Function
//         target.prototype.getParams=<T>(param:T):T=>{
//             return param
//         }
//         target.prototype.getOptions=<T>(param:T):T=>{
//             return param
//         }
//         target.prototype.getNames = ():string=>{
//             return name
//         }
//     }
// }
//
// //ClassDecorator放在class上面
// @watcher
// @watchName("name")
// class Dec{
//     constructor() {
//     }
// }
//
// var dec = new Dec();
// (dec as any).getParams("asa")
//
// //方法装饰器:MethodDecorator  返回3个参数:1.静态成员是类构造方法 实例成员是类的原型对象 2.成员名字 3.成员属性描述符
// const met:MethodDecorator=(...args)=>{
//
// }
// //属性装饰器:PropertyDecorator 返回两个参数 1.静态成员是类构造方法 实例成员是类的原型对象 2.成员名字
// const metPro:PropertyDecorator=(...args)=>{
//
// }
// class A{
//     @metPro
//     name:string
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// //参数装饰器：ParameterDecorator
// const metParam:ParameterDecorator=(...args)=>{
//
// }
// class ParamCl{
//     setParam(@metParam name:string="1231"){}
// }
//
//
