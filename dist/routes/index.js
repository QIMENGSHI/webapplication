"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// 1. Hello World Route
router.get('/hello', (req, res) => {
    res.json({ msg: 'Hello world!' });
});
// 2. ID Echoing Route
router.get('/echo/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id });
});
// 3. POST Request to Sum Numbers
router.post('/sum', (req, res) => {
    const { numbers } = req.body;
    if (Array.isArray(numbers)) {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        res.json({ sum });
    }
    else {
        res.status(400).json({ error: 'Invalid input' });
    }
});
const users = [];
router.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (name && email) {
        users.push({ name, email });
        res.json({ message: 'User successfully added' });
    }
    else {
        res.status(400).json({ error: 'Name and email are required' });
    }
});
// 5. GET All Users
router.get('/users', (req, res) => {
    res.status(201).json(users);
});
exports.default = router;
