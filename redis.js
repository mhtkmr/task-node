//setting redis
class Redis {
  constructor() {
    //importing
    const redis = require('redis');
    //importing
    const bluebird = require('bluebird');
    //converting to promise
    bluebird.promisifyAll(redis);
    //setting client
    const client = redis.createClient();
    this.redis = redis;
    this.client = client;
  }
  get getclient() {
    return this.client;
  }
}

module.exports = new Redis();
