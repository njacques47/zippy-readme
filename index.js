// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
  .prompt([
    { // project name
      type: 'input',
      name: 'projectName',
      message: 'What is the project named? (required)'
    },
    { // table of contents
      type: 'confirm',
      name: 'tableOfContents',
      message: 'Would you like a table of contents?',
      default: false
    },
    { //installation guide 
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project? Provide a descriptive step by step explanation.',
    },
    { // usage
      type: 'input',
      name: 'usage',
      message: 'What does someone need to know about this project such as instructions for use and examples?',
    },
    { // credits (optional) list collaborators and their github usernames
      type: 'input',
      name: 'credits',
      message: 'What does someone need to know about this project such as instructions for use and examples?',
    },
    { // licenses that tell what can be done with the project
      type: 'input',
      name: 'license',
      message: 'What does someone need to know about this project such as instructions for use and examples?',
    },
    // use when: for everything below here
    { // badges (optional)
      type: 'input',
      name: 'badges',
      message: 'What does someone need to know about this project such as instructions for use and examples?',
    },
    { // features (optional)
      type: 'input',
      name: 'features',
      message: 'What does someone need to know about this project such as instructions for use and examples?',
    },
    { // how to contribute/open source (optional)
      type: 'input',
      name: 'contribution',
      message: 'What does someone need to know about this project such as instructions for use and examples?',
    },
    { // tests (optional)
      type: 'confirm',
      name: 'tests',
      message: 'Would you like to include tests?',
    },
  ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
