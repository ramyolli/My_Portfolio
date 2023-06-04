
const {createTestimonials,getTestimonials} =require("../controllers/Testimonial")
const express = require("express")
const router = express.Router()
router.route("/").post(createTestimonials).get(getTestimonials)
module.exports=router


