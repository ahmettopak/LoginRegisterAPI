const { register, login, deleteUser } = require("../controllers/auth.js")
const express = require('express')
const router = express.Router();
router.post('/register', register)
router.post('/login', login)
router.post('/delete', deleteUser)
module.exports = router