const Router = require('express')
const router = new Router()
const formRouter = require('./form.routes')




router.use('/form', formRouter);



module.exports = router