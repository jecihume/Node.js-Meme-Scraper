/*
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
// search for library to download files
// create folder with code

// it takes the (HTML Markup as a) string and it allows me to shuffle stuff around and extracts things etc. (manipulating in a structured way)
import cheerio from 'cheerio';
// going to a webiste, takes the HTML from that site, brings it back to me -> a string of HTML
import fetch from 'node-fetch';

// await cannot operate outside of a function -> that's why I made a function
async function fetchURL() {
  // it waits until all HTML on the webpage is loaded and puts it in the variable
  const response = await fetch(
    'https://memegen-link-examples-upleveled.netlify.app/',
  );

  // waiting until the text from the download is decoded from all the data (browser details...) and puts it into the variable 'body'
  const body = await response.text();

  // the body variable has the string of HTML in it - I am loading the body into cheerio
  const $ = cheerio.load(body);

  // variable that takes everything containing 'img' from the § variable
  const images = $('img');

  // images is an array, that's why I can select the  first object; in this is another object called 'attribs', and in that an object called 'src'
  console.log(images[0].attribs.src);
}

fetchURL();
//console.log(images.logHtml());
// $('img').each((i, el) => {
// const imageLinks = §(el).attr('href');
// });
