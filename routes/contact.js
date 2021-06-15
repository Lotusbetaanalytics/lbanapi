const express = require("express");
const { createContact, cehRegistration } = require("../controllers/contact");

const router = express.Router();

router.route("/").post(createContact);
router.route("/ceh").post(cehRegistration);

module.exports = router;
