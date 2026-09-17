class Person{
    eat(){
        console.log("The person eats");
    }
    sleep(){
        console.log("The person sleeps");
    }
}

class Employee extends Person{
    works(){
        console.log("The Employee works");
    }
}

class Doctor extends Person{
    treatment(){
        console.log("The Doctor is teating Ptient");
    }
}