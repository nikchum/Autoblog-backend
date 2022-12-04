const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/auth');
const { ctrlWrapper } = require('../../helpers');
const { validateBody, auth } = require('../../middlewares');
const { schemas } = require('../../models/user');

// signup
router.post('/register', validateBody(schemas.registerSchema), ctrlWrapper(ctrl.register));

// signin
router.post('/login', validateBody(schemas.loginSchema), ctrlWrapper(ctrl.login));

router.get('/current', auth, ctrlWrapper(ctrl.getCurrent));

router.get('/logout', auth, ctrlWrapper(ctrl.logout));

module.exports = router;
