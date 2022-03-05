// renders table of contents based on user input
const renderTOC = () => {
    let readmeType = data.readme;

    if (readmeType === 'Detailed') {
      return `
        ## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [Credits](#credits)
        - [License](#license)
        - [Badges](#badges)
        - [Features](#features)
        - [Contributions](#contributions)
        - [Tests](#tests)
        - [Contact](#contact)
        `;
    } else if (readmeType === 'Simple ToC') {
      return `
        ## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [Credits](#credits)
        - [License](#license)
        `;
    } else {
      return false;
    };


  // switch (readme) {
  //   case 'Simple ToC':
      
  //     return `
  //     ## Table of Contents
  //     - [Installation](#installation)
  //     - [Usage](#usage)
  //     - [Credits](#credits)
  //     - [License](#license)
  //     `;
    
  //   case 'Detailed':
  //     return `
  //     ## Table of Contents
  //     - [Installation](#installation)
  //     - [Usage](#usage)
  //     - [Credits](#credits)
  //     - [License](#license)
  //     - [Badges](#badges)
  //     - [Features](#features)
  //     - [Contributions](#contributions)
  //     - [Tests](#tests)
  //     - [Contact](#contact)
  //     `;
  
  //   default:
  //     return false; // may have to return an empty string
  // }
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ${renderTOC()}
  

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}
  
  ## License 
  ${data.license}

  ## Badges
  ${data.badges}
  
  ## Features
  ${data.features}

  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Contact
  If you have any questions, you can [email me](${data.email}) or visit my [github profile](https://github.com/${data.github}). 
`;
}

module.exports = generateMarkdown;
