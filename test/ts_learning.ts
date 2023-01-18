const fn = (name: string="默认值", age?: number|number,...result:number[]): string => {
    console.log(name+age)
    for (let i = result.length - 1; i >= 0; i--) {
        
    }
    return name+age
}

fn("名称")

class Person{
    private name: string;
    constructor(n:string) {
        this.name=n
    }
    public run():void{

    }
}

var p=new Person("xiaobai")
p.run()

class Chinese extends Person{
    private age:number|string;
    static color:string="黄色";
    constructor(n:string,a:number) {
        super(n); //super调用父类构造方法
        this.age=a;
    }
    speak():void{
        super.run();
        console.log("中文")
    }
    static getAge():void{
        console.log(this.getAge())
    }
}

var chinese = new Chinese("中国",1);
chinese.speak()
Chinese.getAge()


//抽象类
abstract class Animal{
    name:string

    constructor(name: string) {
        this.name = name;
    }

    run(){

    }
}

class Dog extends Animal{
    constructor(name: string) {
        super(name);
    }
}

var cat:Animal=new Dog("")

abstract class AnimalParent{
    name:string

    constructor(name: string) {
        this.name = name;
    }
    abstract eat():any;

}

class Cat extends AnimalParent{

    constructor(name: string) {
        super(name);
    }

    eat():any{

    }
}

var cat1:AnimalParent = new Cat("");
cat1.eat()


//接口类，对比抽象类区别在于所有父类方法都必须被实现
interface AnimalInterface{
    name: string;
    eat(str:string):void;
}
class Dog2 implements AnimalInterface{
    name:string
    constructor(name:string) {
        this.name=name
    }
    eat(str: string) {
    }
}

var dog2 = new Dog2("");
dog2.eat("ss")


function testDog(mycar:Dog2){
    mycar.eat(mycar.name)
}

testDog(new Dog2("asda"))