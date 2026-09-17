class Person{
    constructor(name){
        this.name=name;
        this.species="homo sapiens";
    }
    eat(){
        console.log("The person eats");
    }
    sleep(){
        console.log("The person sleeps");
    }
}

class Engineer extends Person{
    constructor(name,branch){
        super(name); // to invoke the parent's constructor
        this.branch=branch
    }
    works(){
        super.eat(); //invoked the parent's eating before working
        console.log("The Engineer works");
    }
}

class Doctor extends Person{
    treatment(){
        console.log("The Doctor is teating Ptient");
    }
}