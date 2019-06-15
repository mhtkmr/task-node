module.exports = {
  port: 3000,
  name: 'test',
  env: 'development',
  mongo_host: process.env.MONGO_HOST_URI,
  secretOrKey: process.env.SECRET
};
