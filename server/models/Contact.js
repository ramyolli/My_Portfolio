const { Schema, model } = require("mongoose");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "please provide a user  name"],
      min: [2, "name  should be greater than 2"],
    },
    email: {
      type: String,
      required: [true, "please provide an email"],
    },
    message: {
      type: String,
      required: [true, "please provide a  messgae"],
      min: [3, "please message should be greater than 4"],
    }
  },
  {
    timestamps: true,
  }
);

const contactschema = model("contacts", contactSchema);

module.exports =contactschema;
