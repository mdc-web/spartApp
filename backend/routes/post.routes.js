const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "voici les données"});
});

router.post("/", (req, res) => {
    res.json({ message: req.body.message });
});

router.put("/:id", (req, res) => {
    res.json({ messageId: req.params.id });
});

router.delete("/:id", (req, res) => {
    res.json({ messageId:"post supprimé id : " + req.params.id });
});

router.put

module.exports = router;