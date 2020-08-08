const express = require("express");
const router = express.Router();

const controller = require('../controller')
const auth = require('../middlewares/auth');

router.get('/', (req, res) => res.send('Hello World!'))

router.post('/api/login', controller.login);
router.post('/api/signup', controller.signup);

router.post('/api/post', auth.authenticate, controller.post);

module.exports = router;