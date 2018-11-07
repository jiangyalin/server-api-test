const http = require('http')
const url = require('url')
const fs = require('fs')
const httpPort = 80

// var url_request = url.parse(request.url).pathname;
// var tmp  = url_request.lastIndexOf(".");
// var extension  = url_request.substring((tmp + 1));

http.createServer((req, res) => {
  // const pathname = url.parse(req.url).pathname;
  // console.log('dd', pathname.substring(1))
  // console.log('req.url', req.url)
  // console.log('mmmm')
  fs.readFile('./static' + req.url, 'utf-8', (err, content) => {
    if (err) {
      console.log('err', err)
    }

    // var extension = path.extname(req.url);
    var name = req.url.split('/').pop();
    console.log('name', name)
    console.log('name.lastIndexOf(\'.\')', name.lastIndexOf('.'))

    if (name === '.html') response.writeHeader(200, {"Content-Type": 'text/html'});
    else if (name === '.htm') response.writeHeader(200, {"Content-Type": 'text/html'});
    else if (name === '.css') response.writeHeader(200, {"Content-Type": 'text/css'});
    else if (name === '.js') response.writeHeader(200, {"Content-Type": 'text/javascript'});
    else if (name === '.png') response.writeHeader(200, {"Content-Type": 'image/png'});
    else if (name === '.jpg') response.writeHeader(200, {"Content-Type": 'image/jpg'});
    else if (name === '.jpeg') response.writeHeader(200, {"Content-Type": 'image/jpeg'});
    else { console.log("NO CORRECT EXTENSION")}

    res.end(content)
  })
  // fs.readFile('./static/css/app.e0e01fece9387e134f36fd80a69dfaa1.css', 'utf-8', (err, content) => {
  //   if (err) {
  //     console.log('We cannot open "app.css" file.')
  //   }
  //
  //   res.writeHead(200, {
  //     'Content-Type': 'text/html; charset=utf-8'
  //   })
  //
  //   res.end(content)
  // })
}).listen(httpPort, () => {
  console.log('Server listening on: http://localhost:%s', httpPort)
})
