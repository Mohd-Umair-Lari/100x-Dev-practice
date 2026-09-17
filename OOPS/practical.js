DATA="!@#$%^&*()";

class User{
    constructor(name,email){
        this.email=email;
        thhis.name=name;
    }
    viewData(){
        console.log("data =",DATA);
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA="This is the new updated value";
    }
}

let stud1=new User("Lari","lari@example.com");
let stud2=new User("Purush","purush@example.com");

let teach1=new User("Dean","dean@example.com");

let admin1=new Admin("Admin","admin@email.com")