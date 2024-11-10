const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const connectDB = require('./backend/config/db');
const cors = require('cors');

const users = require('./backend/routes/user');
const accounts = require('./backend/routes/account');
const events = require('./backend/routes/event');




dotenv.config({ path: './backend/config/config.env' })

connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use('/api/v1/we-detox/users', users);
app.use('/api/v1/we-detox/accounts', accounts);
app.use('/api/v1/we-detox/events', events);

const server = app.listen(
    PORT,
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`)
);

process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
})


