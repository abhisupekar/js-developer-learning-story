const http = require('http');
const urls = ['shapeshed.com', 'www.bbc.co.uk', 'edition.cnn.com'];

fetchPage = (url) => {
    let start = new Date();
    http.get({ host: url }, (res) => {
        console.log(`Got response from ${url}`);
        console.log(`Request took ${new Date() - start}ms`);
    });
}

for(let i = 0; i < urls.length; i++) {
    fetchPage(urls[i]);
}
