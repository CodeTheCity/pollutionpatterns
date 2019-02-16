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
    user     : '',
    password : '',
    database : 'pollutionpatterns'
  });
  this.connection.connect();
  this.connection.query('SELECT * FROM sensor', function (error, results, fields) {

    if (error) throw error;
    console.log(error)
    console.log(results)
    console.log(fields)
    console.log('The solution is: ', results[0].solution);
  });

  this.connection.end();

}

/**
*  Sensor data by id
* @method sensorDataGetter
*
*/
RequestHander.prototype.sensorDataGetter = function () {
  // console.log()
}

module.exports = RequestHander
// export default RequestHander
