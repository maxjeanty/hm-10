const Manager = require("./lib/Manager");

const Engineer = require("./lib/Engineer");

const Intern = require("./lib/Intern");

const inquirer = require("inquirer");

const path = require("path");

const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employees = [];

function init() {
  inquiries();
}



function inquiries() {
  inquirer.prompt([{
    type: "input",
    message: " your name?",
    name: "name"
  }, {
    type: "number",
    message: "employee ID?",
    name: "id"
  }, {
    type: "input",
    message: "email address?",
    name: "email"
  }, {
    type: "list",
    message: " your role?",
    name: "role",
    choices: ["Engineer", "Intern", "Manager"]
  }]).then(function ({
    name,
    id,
    email,
    role
  }) {
    switch (role) {
      case "Engineer":
        inquirer.prompt({
          type: "input",
          message: "your GitHub username?",
          name: "github"
        }).then(function ({
          github
        }) {
          let newEmployee;
          newEmployee = new Engineer(name, id, email, github);
          employees.push(newEmployee);
          render(employees);
          employees = [];
          addEmployee();
        });
        break;

      case "Intern":
        inquirer.prompt({
          type: "input",
          message: "Which School?",
          name: "school"
        }).then(function ({
          school
        }) {
          let newEmployee;
          newEmployee = new Intern(name, id, email, school);
          employees.push(newEmployee);
          render(employees);
          employees = [];
          addEmployee();
        });
        break;

      case "Manager":
        inquirer.prompt({
          type: "input",
          message: "office Number?",
          name: "officeNumber"
        }).then(function ({
          officeNumber
        }) {
          let newEmployee;
          newEmployee = new Manager(name, id, email, officeNumber);
          employees.push(newEmployee);
          render(employees);
          employees = [];
          addEmployee();
        });
        break;
    }
  });
}

function addEmployee() {
  inquirer.prompt({
    type: "confirm",
    message: " team tembers?",
    name: "moreMembers"
  }).then(function ({
    moreMembers
  }) {
    console.log(" other members", moreMembers);

    if (moreMembers) {
      console.log(moreMembers);
      inquiries();
    }
  }).catch(err => {
    console.log("Error adding members", err);
    throw err;
  });
}

init()





// }code to use inquirer to gather information about the development team members,
    // and to create objects for each team member (using the correct classes as blueprints!)
    // After the user has input all employees desired, call the `render` function (required
    // above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
