const express = require('express');
const router = express.Router();

// Sample route
router.get('/hello', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

// Post route
router.post('/echo', (req, res) => {
    res.json({ echo: req.body.message });
});

module.exports = router;
