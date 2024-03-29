const express = require('express')

// controller functions
const { createSrs, getSrs, toggleSrs, updateSrs, resetSrs } = require('../controllers/srsController')

const router = express.Router()

// create srs route
router.post('/createsrs', createSrs)

// get srs route
router.post('/getsrs', getSrs)

// toggle srs route
router.post('/togglesrs', toggleSrs)

// update srs route
router.post('/updatesrs', updateSrs)

// reset srs route
router.post('/resetsrs', resetSrs)

module.exports = router