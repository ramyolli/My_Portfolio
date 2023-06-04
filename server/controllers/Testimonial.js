const Testimonials = require("../models/Testimonial");

const createTestimonials = async (req, res) => {
    try {
        const test = await Testimonials.create({ ...req.body })
        res.json({
            status: "Ok"
        })

    } catch (err) {
        res.status(500).json({
            status: "fail"
        })
    }



}
const getTestimonials = async (req, res) => {
    const testimonials = await Testimonials.find({}).sort({ createdAt: -1 });
    res.status(200).json({ testimonials })
}
module.exports = {
    createTestimonials,
    getTestimonials

}