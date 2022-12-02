const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/contacts');
const { ctrlWrapper } = require('../../helpers');
const { validateBody, isValidId, auth } = require('../../middlewares');
const { schemas } = require('../../models/contact');

router.get('/', auth, ctrlWrapper(ctrl.getAll));

router.get('/:contactId', auth, isValidId, ctrlWrapper(ctrl.getById));

router.post('/', auth, validateBody(schemas.addSchema), ctrlWrapper(ctrl.add));

router.put(
  '/:contactId',
  auth,
  isValidId,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateById)
);

router.patch(
  '/:contactId/favorite',
  auth,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

router.delete('/:contactId', auth, isValidId, ctrlWrapper(ctrl.removeById));

module.exports = router;
