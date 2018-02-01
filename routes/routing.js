/**
 * Express Router configuration
 */
const express = require('express');
const router = express.Router();
const ProfileController = require('../controller/profileController');
const profileController = new ProfileController();

router.get('/', function (req, res) {
    res.render('index', {title: 'A3dev Jenkins'});
});

/* API routes */
router.get('/api/v1', function (req, res) {
    profileController.getProfilesList(res);
});

module.exports = router;
