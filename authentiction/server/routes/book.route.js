const express = require('express');
const router = express.Router();
const { getBooks } = require("../controllers/book.controller")

const authValidator = require("../middlewares/auth")

router.get("/" , getBooks);

module.exports = router;
