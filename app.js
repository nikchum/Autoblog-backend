const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const authRouter = require('./routes/api/auth');
const postsRouter = require('./routes/api/posts');
const commentsRouter = require('./routes/api/comments');

require('dotenv').config();

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(express.static('uploads'));

app.use('/api/auth', authRouter);
app.use('/api/posts', postsRouter);
app.use('/api/comments', commentsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
