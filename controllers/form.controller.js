const FormModel = require('../models/form.model')


class formController {
	async createForm(req, res) {
        try {
            const form = await FormModel.create({
                name: req.body.name,
                questions: req.body.questions
            })

            res.status(200).json({
                form
            })
        } catch(err) {
            console.log("err", err)

            res.status(404).json({
            })
        }
		
	}
    async getForms(req, res) {
        try {
            const form = await FormModel.find({});
            res.status(200).json({
                form
            })
        } catch(err) {

        }
		
	}
    async getFormById (req, res) {
        try {
            const form = await FormModel.findOne({_id: req.params.id});
            res.status(200).json({
                form
            })
        } catch (err) {

        }
        
    }
    async updateForm (req, res) {
        try {
            const id = req.params.id;
                await FormModel.updateOne({_id: req.params.id}, req.body, () => {
                    res.status(200).json({msg: "updated successfully a post with id = " + id});
            })
        } catch (err) {

        }

    }

    async deleteForm (req, res) {
        try {
                const id = req.params.id;
                await FormModel.remove({_id: req.params.id}, req.body, () => {
                res.status(200).json({msg: 'deleted successfully a post with id = ' + id});
                })
        } catch (err) {

        }
    } 
}


module.exports = new formController()