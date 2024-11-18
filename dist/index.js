"use strict";
// const http = require("http")
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("server is running on port 8000")
// http.createServer(function (req, res) {
// console.log("client made a request")
// res.write("hello world")
// res.end()
// }).listen(8000)
// import express, {Express} from "express"
// const app: Express = express() 
// const port: number = 8000
// let x = 40022
// app.use (express.static ("public"))
// app.listen(port, () => {
//     console.log(`server is running on port ${port}`)
// })
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware to parse JSON requests
app.use(body_parser_1.default.json());
// Serve static files from the 'public' directory
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
const users = [];
// 1. Hello World Route
app.get('/hello', (req, res) => {
    res.json({ msg: 'Hello world!' });
});
// 2. ID Echoing
app.get('/echo/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id });
});
// 3. POST Request to Sum Numbers
app.post('/sum', (req, res) => {
    const { numbers } = req.body;
    if (Array.isArray(numbers)) {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        res.json({ sum });
    }
    else {
        res.status(400).json({ error: 'Invalid input' });
    }
});
// 4. Add User via Frontend Form
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (name && email) {
        users.push({ name, email });
        res.json({ message: 'User successfully added' });
    }
    else {
        res.status(400).json({ error: 'Name and email are required' });
    }
});
// 5. Get All Users
app.get('/users', (req, res) => {
    res.status(201).json(users);
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
