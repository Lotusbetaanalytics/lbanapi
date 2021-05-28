const express = require("express");
const { createContact } = require("../controllers/contact");

const router = express.Router();

router.route("/").post(createContact);

module.exports = router;
