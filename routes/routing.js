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
router.get('/api/v1/name', function (req, res) {
    profileController.getProfilesList(res);
});
router.get('/api/v1/delivery', function (req, res) {
    profileController.getDeliveryList(res);
});

router.get('/test', function (req, res) {
    //localhost:3000/register?firstname=bob&lastname=test&package=2&createdAt=886375680000
    //var result = [req.param('firstname'), req.param('lastname'), req.param('package'), req.param('createdAt')]
    //var result = req.params('firstname')
    console.log('test ok')
});

module.exports = router;
