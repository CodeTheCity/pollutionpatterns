var fs = require('fs')
var restify = require('restify');
const RequestHander = require('./requestHandler.js');
// import RequestHander from 'requestHander.js'

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

function sensorData(req, res, next) {
  console.log(req.params)
  const dataAPI = new RequestHander()
  dataAPI.sensorDataGetter(res, req.params)
  next();
}

function deviceData(req, res, next) {
  console.log(req.params)
  next();
}

/* server setup  both   http  and  https
*
*/
var https_options = {
    // key: fs.readFileSync('./HTTPS.key'), //on current folder
    // certificate: fs.readFileSync('./HTTPS.cert')
};

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.get('/device/:device_id', deviceData);
// server.head('/hello/:name', sensorData);

server.get('/sensor/:sensor_id/:comp_id/', sensorData);
// server.head('/hello/:name', sensorData);

server.listen(8082, function() {
  console.log('%s listening at %s', server.name, server.url);
});
