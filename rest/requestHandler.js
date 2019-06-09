'use strict'
/**
*  PullutionPattern API
*
*
* @class RequestHander
* @package    safeFlow
* @copyright  Copyright (c) 2019 CodetheCity
* @license    http://www.gnu.org/licenses/old-licenses/gpl-3.0.html
* @version    $Id$
*/
const util = require('util')
const events = require('events')
const mysql = require('mysql');

var RequestHander = function () {
  events.EventEmitter.call(this)
  this.connection = {}
  this.mysqlConnect()
}

/**
* inherits core emitter class within this class
* @method inherits
*/
util.inherits(RequestHander, events.EventEmitter)

/**
*  mysql connect
* @method mysqlConnect
*
*/
RequestHander.prototype.mysqlConnect = function () {
  // console.log()
  this.connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Ivy22adder88!',
    database : 'pollutionpatterns'
  });

}

/**
*  Sensor data by id
* @method sensorDataGetter
*
*/
RequestHander.prototype.sensorDataGetter = function (res, next, computeAsked) {
  // console.log()
  let dataSensor
  // what type of computation asked for
  if (computeAsked.sensor_id === 'p1') {
    console.log('p1 data query')
    this.formSensorQuery(res, next, computeAsked.comp_id)
  } else if (computeAsked.sensor_id === 'p2') {
    console.log('p2 data query')
  }
}

/**
*  form query per sensor per compute
* @method formSensorQuery
*
*/
RequestHander.prototype.formSensorQuery = function (res, next, computeAsked) {
  console.log('start query')
  this.connection.connect();
  this.connection.query('SELECT * FROM monthlyaverage', function (error, results, fields) {
    if (error) throw error;
    console.log(error)
    res.send(results);
  });
  this.connection.end();
  next();
}

/**
*  form query per sensor per compute
* @method formSensorQuery2
*
*/
RequestHander.prototype.formSensorQuery2 = function (computeAsked) {
  // console.log()
  this.connection.connect();
  this.connection.query('SELECT * FROM sensor', function (error, results, fields) {

    if (error) throw error;
    console.log(error)
  });
  this.connection.end();
}

module.exports = RequestHander
// export default RequestHander
