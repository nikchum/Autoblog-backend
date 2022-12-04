const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/posts');
const { ctrlWrapper } = require('../../helpers');
const { validateBody, isValidId, auth } = require('../../middlewares');
// const { schemas } = require('../../models/contact');

// router.get('/', auth, ctrlWrapper(ctrl.getAll));
router.get('/', ctrlWrapper(ctrl.getAll));

module.exports = router;
