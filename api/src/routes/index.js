'use strict'

const { Router } = require('express')
const router = Router()

const commentRoutes = require('./commentsRoutes')
const exercisesRoutes = require('./exercisesRoutes')
const opinionsRoutes = require('./opinionsRoutes')
const qaAdminRoutes = require('./qaAdminRoutes')
const routinesRoutes = require('./routinesRoutes')
const usersInfoRoutes = require('./userInfoRoutes')
const usersRoutes = require('./usersRoutes')

router.use('/comments', commentRoutes)
router.use('/exercises', exercisesRoutes)
router.use('/opinions', opinionsRoutes)
router.use('/aq-admin', qaAdminRoutes)
router.use('/routines', routinesRoutes)
router.use('/users-info', usersInfoRoutes)
router.use('/users', usersRoutes)

module.exports = router
