

const { Router } = require('express')
const router = new Router()
const auth = require('../Middlewares/auth')


router.get('/login', auth.login)

router.get('/logout', auth.logout)


module.exports = router