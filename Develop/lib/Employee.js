// TODO: Write code to define and export the Employee class
class Employee{
    constructor(name,id,email){
        this.name = name;
        this.id= id;
        this.email= email;
        this.role="Employee";
    }
    name(){
        return this.name;
    }
    Id(){
        return this.id;
    }
    email(){
        return this.email;
    }
    role(){
        return this.role;
    }

}
module.exports = Employee;