const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const fs = require("fs");

app.use(require('morgan')('short'));

var jsonParser = bodyParser.json();

(function initWebpack() {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack/common.config');
  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath,
  }));

  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
  }));

  app.use(express.static(__dirname + '/'));
})();

app.post('/api/payment/', jsonParser, function(req, res) {
  setTimeout(function() {
    fs.readFile(__dirname + "/" + "api/payment.json", 'utf8', function(err, data) {
      let obj = JSON.parse(data);
      console.log(req.body);
      for(var i=0; i < obj.length; i++) {
        if(obj[i].number == req.body.number &&
            obj[i].cvc == req.body.cvc &&
            obj[i].expiration.year == req.body.year &&
            obj[i].expiration.month == req.body.month) {
          res.end('{"result": "valid"}');
        }
      }
      res.end('{"result": "not valid"}');
    })
  }, 4000);
});

app.post('/api/coupon', jsonParser, function(req, res) {
  setTimeout(function() {
    fs.readFile(__dirname + "/" + "api/coupon.json", 'utf8', function(err, data) {
      let obj = JSON.parse(data);
      for(var i=0; i < obj.length; i++) {
        if(obj[i] == req.body.coupon) {
          res.end('{"result": "valid"}');
        }
      }
      res.end('{"result": "not valid"}');
    })
  }, 4000); // simulate server latency
});

app.get(/.*/, function root(req, res) {
  res.sendFile(__dirname + '/index.html');
});

const server = http.createServer(app);
server.listen(process.env.PORT || 3000, function onListen() {
  const address = server.address();
  console.log('Listening on: %j', address);
  console.log(' -> that probably means: http://localhost:%d', address.port);
});
