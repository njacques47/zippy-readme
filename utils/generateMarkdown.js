// renders table of contents based on user input
const renderTOC = data => {
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
      return '';
    };
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'GPL-3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/GPL-3.0)';
    case 'Apache-2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'BSD-3-Clause':
      return '[![License]((https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'None':
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `I am using the [${license}](https://opensource.org/licenses/${license}) license for this project. Please follow the contributing guidelines provided. Happy coding!
    `
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
    
  ## Tests
  ${data.tests}

  ## Contributing
  ${data.contributing}
  
  ## License 
  ${renderLicenseSection(data.license)}
  
  ## Contact
  If you have any questions, you can [email me](${data.email}) or visit my [github profile](https://github.com/${data.github}). 
`;
}

module.exports = generateMarkdown;
