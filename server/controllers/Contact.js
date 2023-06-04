const Contact = require("../models/Contact");
const createContact = async (req, res) => {

    try {
        await Contact.create({ ...req.body });
        res.json({ status: true });

    } catch (err) {
        res.status(200).json({ status: "fail" })
    }
};

const getAllContact = async (req, res) => {
    const contacts = await Contact.find({});
    res.status(200).json({ contacts, nHits: contacts.length });
};
module.exports = { createContact, getAllContact };
