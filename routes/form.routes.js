const Router = require('express')
const router = new Router()
const formController = require('../controllers/form.controller')


router.post('/',  formController.createForm);
router.get('/',  formController.getForms);
router.get('/:id',  formController.getFormById);
router.put('/:id',  formController.updateForm);
router.delete('/:id', formController.deleteForm);





module.exports = router