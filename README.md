# Zippy README Generator


## Description
Sometimes you don't wan't to think too hard about setting up a README file. Its the simplest part of the process but also the most lackluster. In just a few keystrokes you'll have a README generated with all the sections you need without even thinking about it. Starter code was provided for this assignment and license badges were provided by this [gist](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba).

## Installation
To use this project, clone the repo to your local machine and then run `npm install` in the command line of your terminal. This will initialize the required dependancies needed to make the magic happen! 

## Usage
To initiate the prompt, run `node index` (add the .js if you'd like) in the command line of your terminal (after you've followed the installation instructions of course). That will initiate some prompts to complete and viola! A new README file wil be generated in the distribution folder. Here's a [video demo](https://drive.google.com/file/d/1YAjRp3jGwcM2e7YXTenCodAL-Mh4rMCA/view) of this process. NOTE: Please be mindful that the table of contents will remove a section if no license is selected.



## Future Development
I spent some ~~AKA way too much~~ time on figuring out how to make this a useful tool for someone with a more robust project or is just really detailed with their documentation. Here's what I came up with:
- add a prompt to ask the user if they want a detailed README
  - the difference between a "simple" README and a "detailed" one would be defined
- if true, prompt the user to select the sections they want to add from a list
  - most of the sections would return empty but some additional questions would be conditionally rendered and return populated data
  - section ideas: resources/references used, collaborators, badges section, and maybe even release notes
- new README is generated to user specifications using the `.map()` method   


## Deployment
[Github](https://github.com/njacques47/zippy-readme)
[Project Demo Speedrun](https://drive.google.com/file/d/1YAjRp3jGwcM2e7YXTenCodAL-Mh4rMCA/view) a demo can also be viewed in the repo as well.