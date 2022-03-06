# Zippy README Generator


## Description
Sometimes you don't wan't to think too hard about setting up a README file. Its the simplest part of the process but also the most lackluster. In just a few keystrokes you'll have a README generated with all the sections you need without even thinking about it. Starter code was provided for this assignment.

## Installation
To use this project, clone the repo to a desired location and then run `npm install` in the command line of your terminal. This will initialize the required dependancies needed to make the magic happen. 

## Usage
To initiate the prompt, run `node index` in the command line of your terminal (after you've followed the installation instructions of course). That will initiate some prompts to complete and viola! A new README file wil be generated in the distribution folder. Here's a video demo of this process.
![PROJECT-DEMO](demo-video-goes-here)


## Future Development
I spent some ~~AKA way too much~~ time on figuring out how to make this a useful tool for someone with a more robust project or is just really detailed with their documentation. Here's what I came up with:
- add a prompt to ask the user if they want a detailed README
  - define the difference between a "simple" README and a "detailed" one
- if true, prompt the user to select the sections they want to add (these will be empty sections)
- some additional questions are conditionally generated
- new README is generated to user specifications using the `.map()` method


## Deployed Application
[Github](https://github.com/njacques47/zippy-readme)