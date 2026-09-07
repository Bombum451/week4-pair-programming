const express = require('express');
const router = express.Router();

const { getAllTours } = require('../controllers/tourControllers');

router.get('/', getAllTours);
router.post('/', createTour);

module.exports = router;

