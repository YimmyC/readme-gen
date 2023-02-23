// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the project title?",
    name: "title",
  },
  {
    type: "list",
    message: "What is the license type?",
    name: "license",
    choices: ["MIT", "APM", "Bower", "None"],
  },
  {
    type: "input",
    message: "What is the project description?",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "Describe the project usage.",
    name: "usage",
  },
  {
    type: "input",
    message: "Describe the contribution guidelines.",
    name: "contributing",
  },
  {
    type: "input",
    message: "Describe the test instructions.",
    name: "tests",
  },
  {
    type: "input",
    message: "Enter your Github username.",
    name: "github",
  },
  {
    type: "input",
    message: "Enter your email.",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const exportData = generateMarkdown(data);
  return fs.writeFileSync(fileName, exportData);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    writeToFile("README.md", response);
  });
}

// Function call to initialize app
init();
