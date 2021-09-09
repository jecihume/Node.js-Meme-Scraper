/*
How to get HTML from a webpage inside of my JS?
From the HTML string, get an array of strings, which will contain the URL of the image
Idea 1: Slice the string by certain identifiers
Idea 2: Look for the .jpg in the string
Extract the first 10 image URLs
Loop over the first 10 jpg image URLs
Access / navigate to the image URL
Save the response string in a variable
Make a file with the contents of the string
Maybe: check if any problems arise from rewriting the files
Preflight, commit, deploy, drone (everything in the cheatsheet)
*/

import fetch from 'node-fetch';

//const cheerio = require('cheerio');

//await cannot operate outside of a function
async function fetchURL() {
  const response = await fetch(
    'https://memegen-link-examples-upleveled.netlify.app/',
  );
  const body = await response.text();
  console.log(body);
}

fetchURL();
