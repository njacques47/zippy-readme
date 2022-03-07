// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer
  .prompt([
    { // project name VALIDATE
      type: 'input',
      name: 'title',
      message: 'What is the project named? (required)',
      validate(answer) {
        if (!answer) {
          return "Please enter a valid response"
        }
        return true
      }
    },
    { // project description VALIDATE
      type: 'input',
      name: 'description',
      message: 'Please provide a brief description of your project.',
      validate(answer) {
        if (!answer) {
          return "Please enter a valid response"
        }
        return true
      }
    },
    { //installation guide VALIDATE
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project and setup the programming environment?',
      validate(answer) {
        if (!answer) {
          return "Please enter a valid response"
        }
        return true
      }
    },
    { // usage
      type: 'input',
      name: 'usage',
      message: 'What does someone need to know about this project to use it?',
      validate(answer) {
        if (!answer) {
          return "Please enter a valid response"
        }
        return true
      }
    },
    { // tests
      type: 'input',
      name: 'tests',
      message: 'What tests are included and how are they used?',
      validate(answer) {
        if (!answer) {
          return "Please enter a valid response"
        }
        return true
      }
    },
    { // how to contribute to project 
      type: 'input',
      name: 'contributing',
      message: 'What are the guidelines for contributing?',
      validate(answer) {
        if (!answer) {
          return "Please enter a valid response"
        }
        return true
      }
    },
    { // licenses that tell what can be done with the project
      type: 'list',
      name: 'license',
      message: 'What license does this project use?',
      choices: [
        'MIT',
        'GPL-3.0',
        'Apache-2.0',
        'BSD-3-Clause',
        'None'
      ]
    },
    { // contact details
      type: 'input',
      name: 'email',
      message: 'What is your email?',
      validate(answer) {
        if (!answer) {
          return "Please enter a valid response"
        }
        return true
      }
    },
    { 
      type: 'input',
      name: 'github',
      message: 'What is your github username? (ex. breehall)',
      validate(answer) {
        if (!answer) {
          return "Please enter a valid response"
        }
        return true
      }
    }
  ]);
};

// TODO: Create a function to write README file
// don't forget to change the name back to README
const writeFile = data => {
  return new Promise ((resolve, reject) => {
    fs.writeFile('./dist/README.md', data, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve('README created! Check distibution folder for the results!');
    });
  });
};

// TODO: Create a function to initialize app
function init() {
  promptUser()
    .then(userAnswers => {
      return generateMarkdown(userAnswers);
    })
    .then(userMarkdown => {
      return writeFile(userMarkdown)
    })
    .then(fileResponse => {
      console.log(fileResponse);
    })
    .catch(err => {
      console.log(err);
    });
};

// Function call to initialize app
init();
