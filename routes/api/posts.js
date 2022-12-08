const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/posts');
const { ctrlWrapper } = require('../../helpers');
const { validateBody, isValidId, auth } = require('../../middlewares');
const { schemas } = require('../../models/post');

// http://localhost:3002/api/posts

// router.get('/', auth, ctrlWrapper(ctrl.getAll));
router.post('/', auth, validateBody(schemas.addSchema), ctrlWrapper(ctrl.add));

router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/comments/:id', isValidId, ctrlWrapper(ctrl.getPostComments));

router.get('/user', auth, ctrlWrapper(ctrl.getUserPosts));

router.get('/:id', isValidId, ctrlWrapper(ctrl.getById));

router.delete('/:id', auth, isValidId, ctrlWrapper(ctrl.removeById));

router.put('/:id', auth, isValidId, ctrlWrapper(ctrl.updateById));
// router.put(
//   '/:contactId',
//   auth,
//   isValidId,
//   validateBody(schemas.addSchema),
//   ctrlWrapper(ctrl.updateById)
// );

// router.patch(
//   '/:contactId/favorite',
//   auth,
//   isValidId,
//   validateBody(schemas.updateFavoriteSchema),
//   ctrlWrapper(ctrl.updateFavorite)
// );

module.exports = router;
