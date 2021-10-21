const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormSchema = new Schema({
    name : {
        type: String,
        required: true,
        unique: true,
    },
    questions : [
        {
           text_value: String,
           field_type: {
               type: String,
               enum: [
                   'single_line_text',
                    'multi_line',
                    'name',
                    // 'address',
                    // 'email',
                    // 'phone',
                    // 'number',
                    // 'url',
                    // 'password',
                    // 'price',
                    ],
               default: 'single_line_text'
           }
        }
    ]

});


module.exports = mongoose.model('Form', FormSchema);