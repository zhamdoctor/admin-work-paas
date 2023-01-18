//namespace作用：
//内部模块化,组织代码防止命名冲突
//命名空间内类默认私有
//使用export暴露

//任何包含顶级import/export的文件都被当作一个模块.如果一个文件不带有顶级import或export声明,则其内容是全局可见
namespace a{
    export const time:number=1000
    export const fn=<T>(arg:T):T=>{
        return arg
    }
    fn(time)
    export namespace b{
        export class Vue{
            param:string
            constructor(param: string) {
                this.param = param;
            }
        }
    }
}
a.time

let v=a.b.Vue
var v1 = new v('1');

import X=a.b
X.Vue

namespace A{
    export const fn=()=>'a'

}

//三斜线
///<reference path="./arr_learning.ts"/>

console.log()

///<reference types="node"/>
//表示引入了@types/node/index.d.ts中声明的名字
//需要写一个d.ts文件时才使用这个指令


