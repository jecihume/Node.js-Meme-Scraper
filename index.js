// takes the (HTML Markup as a) string and it allows me to shuffle stuff around and extracts things etc. (manipulating in a structured way)
import cheerio from 'cheerio';
// Create a folder called memes
// library to download URL and store it in memes folder? - not sure if it does this
import fs from 'fs';
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

  // create a loop that prints no 0-9; condition plus, where to stop, something changes in every loop to move forward
  // let.....0 - declaring the variable
  // stop condition <10
  for (let picDownloads = 0; picDownloads < 10; picDownloads++) {
    // images is an array, that's why I can select the first object; in this is another object called 'attribs', and in that an object called 'src'
    const imageURL = images[picDownloads].attribs.src;

    console.log(imageURL);
    download(imageURL, picDownloads);
  }
}
fetchURL();

// Future task: create and ELSE IF statement to tell the code to not give me an error message
// const memes = './memes';
// fs.mkdir(memes, (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('Directory is created. Yay!');
// });
