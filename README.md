# Node-README-Generator

## About
I made this in an attempt to make creating a README file easier for others. It may not be great, but as long as it works...

## Demonstration
https://drive.google.com/file/d/1lA2Egs7I9PWin0tRUXrqC9f8FTDgIzOw/view

## Installs
The Node.js npm and inquirer npm are needed in order to run this.

## How to Use
In order to use this, clone this repo to your machine. Personally, I use VS Code to interact with this. Open it in that, or another similar software, right-click index.js, then select "Open in Integrated Terminal". In the open terminal, type Node index.js, then input whatever information you need with each prompt. Note that the License prompt will not take in an input but will instead have a list to choose from. Navigate that with the Up and Down arrow keys and hit Enter on a license, or None if you do not wish to add a license to your README. When you finish the last prompt, your completed README will stored in the output folder with a file titled "ProjectREADME.md".

## Credits
Multiple credits to be made here. geeksforgeeks.org for their write up on fs.writeFile() (https://www.geeksforgeeks.org/node-js-fs-writefile-method/?ref=lbp) and fs.writeFileSync() (https://www.geeksforgeeks.org/node-js-fs-writefilesync-method/), Shields.io for the license badging (https://shields.io/category/license), lukas-h's gist that better explained Shields.io's badging (https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba), opensource.org that led me to spdx.org for the license URL generation, and to my classmate, Everitt Gill, who pointed out Shields.io for license badging in the class Slack chat.
