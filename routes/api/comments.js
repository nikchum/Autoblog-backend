const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/comments');
const { ctrlWrapper } = require('../../helpers');
const { validateBody, isValidId, auth } = require('../../middlewares');
const { schemas } = require('../../models/comment');

// http://localhost:3002/api/comments

router.post('/:id', auth, isValidId, validateBody(schemas.addSchema), ctrlWrapper(ctrl.add));
// router.post('/:id', auth, isValidId, ctrlWrapper(ctrl.add));

module.exports = router;
