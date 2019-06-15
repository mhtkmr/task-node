const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const config = require('./config');
const express = require('express');
const bodyparser = require('body-parser');
const user = require('./routes/user');
const userauth = require('./routes/userauth');
const accmodule = require('./routes/modules/account.module');
const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const db = require('./config').mongo_host;
mongoose.set('useCreateIndex', true);

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    mongoose.set('useFindAndModify', false);
    console.log('connected');
  })
  .catch(err => console.log(err));

app.use('/', user);
app.use('/a', [accmodule.accauthenticate], userauth);

app.listen(config.port, () => {
  console.log(`server is working on ${config.port}`);
});
