const express = require("express");
const router = express.Router();
const msqlconect = require("../db/msserver");

//GET API

router.get("/getmaestro", (req, res, next) => {
    msqlconect.query("SELECT * FROM maestro", (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

module.exports = router;