const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const config = require('./server/config/config');

const customersRoute = require('./server/routes/customers.route');
const router = express.Router();
const cors = require('cors');

require('./server/config/mongoose');

router.use('/api/customers', customersRoute);

app.use(cors());
app.use(bodyParser.json())
app.use(router);

app.listen(config.port, config.host);
console.log(`Running on HOST ${config.host} and PORT ${config.port}`);