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
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 8000;
let x = 40022;
app.use(express_1.default.static("public"));
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
