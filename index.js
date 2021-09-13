// Create a folder called memes
// library to download URL and store it in memes folder? - not sure if it does this
// fs is an object to help me work with the file system
import fs from 'node:fs';
// takes the (HTML Markup as a) string and it allows me to shuffle stuff around and extracts things etc. (manipulating in a structured way)
import cheerio from 'cheerio';
// going to a webiste, takes the HTML from that site, brings it back to me -> a string of HTML
import fetch from 'node-fetch';

async function download(memesURL, memesName) {
  const response = await fetch(memesURL);
  const buffer = await response.buffer();
  fs.writeFile(`./memes/meme${memesName}.jpg`, buffer, () =>
    console.log('Picture has loaded! Yaaayyy!!!'),
  );
}

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

  // create a loop that prints no 0-9, condition plus, where to stop, something changes in every loop to move forward
  // let..... 0 - declaring the variable
  // stop condition <10
  for (let picDownloads = 0; picDownloads < 10; picDownloads++) {
    // images is an array, that's why I can select the first object; in this is another object called 'attribs', and in that an object called 'src'
    // picDownloads underneath is the index of the array called images
    const imageURL = images[picDownloads].attribs.src;

    // when calling the download function, replace the second parameter (picDownloads) with the new constant imageNames!
    console.log(imageURL);
    const imageNames = picDownloads + 1;
    download(imageURL, imageNames);
  }
}
fetchURL();

// Future task: create and ELSE IF statement to tell the code to not give me an error message
// './memes' is a map, so that node knows where to put stuff
// . will access a property of the object it belongs to (before the dot)
const memes = './memes';

// alternative 1
if (fs.existsSync(memes)) {
  console.log('Directory exists!');
} else {
  console.log('Directory not found.');
  fs.mkdir(memes, (err) => {
    // a condition always needs to be in parenthesis! like always! Here: does the error exist at all? err is the condition of if
    if (err) {
      throw err;
    }

    console.log('Directory is created. Yay!');
  });
}

// alternative 2
// fs.mkdir(memes, (err) => {
//   // a condition always needs to be in parenthesis! like always! Here: does the error exist at all? err is the condition of if
//   if (err) {
//     // everything in the curlies will only happen if the if-statement turns out to be true!
//     if (err.code !== 'EEXIST') {
//       // these curlier aren't really necessary in this case, but as soon as there would be more code, it makes sense!
//       // if statement with a complete conditional
//       throw err;
//     }
//   }
//   console.log('Directory is created. Yay!');
// });
