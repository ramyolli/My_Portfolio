
const {createContact,getAllContact} =require("../controllers/Contact")
const express = require("express")
const router = express.Router()
router.route("/").post(createContact).get(getAllContact)
module.exports=router


