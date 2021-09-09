import cheerio from 'cheerio';
import fetch from 'node-fetch';

//await cannot operate outside of a function -> that's why I made a function
async function fetchURL() {
  const response = await fetch(
    'https://memegen-link-examples-upleveled.netlify.app/',
  );
  const body = await response.text();

const $ = cheerio.load('fetchURL');

$('a').text();
$('a').addClass('images');

$.html();
// const trial = `<html>
//      <head></head>
//      <body>
//        <ul id="fruits">
//          <li class="apple">Apple</li>
//          <li class="orange">Orange</li>
//          <li class="pear">Pear</li>
//        </ul>
//      </body>
//    </html>`;
// const $ = cheerio.load(trial);

// // const pear = cheerio.html($('.pear'));
// const $ = cheerio.load('This is <em>content</em>.');
// cheerio.text($('body'));

console.log($);
