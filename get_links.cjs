const https = require('https');
const urls = [
  'https://ibb.co/gbz4Wdyr',
  'https://ibb.co/RGTgHtM7',
  'https://ibb.co/SXD8QxXL'
];

Promise.all(urls.map(url => new Promise(resolve => {
  https.get(url, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      let match = data.match(/<link rel="image_src" href="(.*?)"/);
      if (!match) match = data.match(/<meta property="og:image" content="(.*?)"/);
      resolve(`${url} -> ${match ? match[1] : 'not found'}`);
    });
  }).on('error', err => resolve(`${url} -> Error: ${err.message}`));
}))).then(results => console.log(results.join('\n')));
