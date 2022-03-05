// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer
  .prompt([
    { // project name VALIDATE
      type: 'input',
      name: 'name',
      message: 'What is the project named? (required)'
    },
    { // project description VALIDATE
      type: 'input',
      name: 'description',
      message: 'Please provide a brief description of your project.'
    },
    { // table of contents
      type: 'list',
      name: 'readme-type',
      message: 'What type of README would you like? Simple (installation, usage, credits, license), simple ToC (w/ table of contents), or detail (simple ToC + badges, features, contributions, and tests)',
      choices: ['Simple (no table of contents)', 'Simple ToC', 'Detailed'],
      default: [0]
    },
    { //installation guide VALIDATE
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?'
    },
    { // usage
      type: 'input',
      name: 'usage',
      message: 'What does someone need to know about this project such as instructions or examples?',
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
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
