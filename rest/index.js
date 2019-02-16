var restify = require('restify');
const RequestHander = require('./requestHandler.js');
// import RequestHander from 'requestHander.js'

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

function sensorData(req, res, next) {
  const dataAPI = new RequestHander()
  let apiData = dataAPI.mysqlConnect()
  let sensorDback = [{'sensor_id': 22}, {'sensor_id': 23}]
  res.send('sensor data' + sensorDback);
  next();
}


var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.get('/sensor/:sensor_id', sensorData);
// server.head('/hello/:name', sensorData);

server.listen(8082, function() {
  console.log('%s listening at %s', server.name, server.url);
});
