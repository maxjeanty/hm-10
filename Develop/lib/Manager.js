// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee{
constructor(name,id,email,phoneNumer){
    super(name,id,email);
    this.phoneNumer=phoneNumer;
}
role(){
    return "Manager";
}
phone(){
    return this.phoneNumer;
}

}

module.exports = Manager;