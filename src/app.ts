// const http = require("http")

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

import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// In-memory user storage
type TUser = {
  name: string;
  email: string;
};
const users: TUser[] = [];

// 1. Hello World Route
app.get('/hello', (req: Request, res: Response) => {
  res.json({ msg: 'Hello world!' });
});

// 2. ID Echoing
app.get('/echo/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ id });
});

// 3. POST Request to Sum Numbers
app.post('/sum', (req: Request, res: Response) => {
  const { numbers } = req.body;
  if (Array.isArray(numbers)) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    res.json({ sum });
  } else {
    res.status(400).json({ error: 'Invalid input' });
  }
});

// 4. Add User via Frontend Form
app.post('/users', (req: Request, res: Response) => {
  const { name, email } = req.body;
  if (name && email) {
    users.push({ name, email });
    res.json({ message: 'User successfully added' });
  } else {
    res.status(400).json({ error: 'Name and email are required' });
  }
});

// 5. Get All Users
app.get('/users', (req: Request, res: Response) => {
  res.status(201).json(users);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
