interface UserInterface{
    name:string;
    email:string;
    age:number;
    registered();
    payInvoice();
}

class User implements UserInterface{
    name  : string;
    email : string;
    age : number
    constructor(name:string, email:string, age:number){
        this.name = name;
        this.email = email;
        this.age  = age;

        console.log('User Created: '+ this.name);
        console.log(this.email);
    }

    registered(){
        console.log(this.name + 'is now registerd.')
    }

    payInvoice(){
        console.log(this.name + ' paid invoice')
    }
}

class Member extends User{
    id:number;
    constructor(id: number, name: string, email: string, age: number){
        super(name,email,age)
        this.id = id;
    }

    payInvoice(){
        super.payInvoice();
    }
}


//let user1 = new User('John Doe', 'jd@gmail.com',24)
//console.log(user1.age)
//user1.registered()

let member1:User = new Member(1, 'Member 1', 'mn@gmail.com',29)
member1.payInvoice()

//public - access in outside the class
//private - access within class
//protected - access within class and instance of a sub child class within the main class