const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());

app.set('view-engine', 'ejs');

const { router: entry } = require('./routes/entry/index');


app.use('/entry', authManager.authentication, entry);

const { errorHandling, notFound } = require('./utils/middleware');
app.use('*', notFound);
app.use(errorHandling);

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
    console.log(`Express App is listening on ${PORT}`);
});