const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const {mongose} = require('./db/mongose')


//Load in the mongose models
const { List, Task } = require('./db/models');

// Load middleware
app.use(bodyParser.json());

/* ROUTE HANDLERS */


/* LIST ROUTES */ 
app.use(require('./routes/lists.route'));

app.listen(port, () => {
    console.log(`Server is listing on port ${port}`);
});