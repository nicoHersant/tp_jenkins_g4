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
// récupération des livreurs existant pour remplir le select
router.get('/api/v1/name', function (req, res) {
    profileController.getProfilesList(res);
});
// affichage des livraisons du livreur selectionné
router.get('/api/v1/delivery', function (req, res) {
    profileController.getDeliveryList(res);
});

/* Client route */
// enregistrement d'une nouvelle livraison
router.get('/api/v1/new', function (req, res) {
    // exemple
    // localhost:3000/register?firstname=bob&lastname=test&package=2&createdAt=886375680000
    var result = [req.param('firstname'), req.param('lastname'), req.param('package'), req.param('createdAt')]
    profileController.setData(result);
    res.render('done', {title: 'A3dev Jenkins'});
});

module.exports = router;
