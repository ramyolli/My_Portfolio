const { Schema, model } = require("mongoose");
const testModel = new Schema({
    name: {

        type: String,
        required: true,


    },
    description: {
        type: String,
        required:[true,"please description is required "]

    }


},{


});


const testschema = model("testimonials", testModel)
module.exports=testschema