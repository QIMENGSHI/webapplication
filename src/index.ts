import { Router, Request, Response } from 'express';

const router = Router();

// 1. Hello World Route
router.get('/hello', (req: Request, res: Response) => {
  res.json({ msg: 'Hello world!' });
});

// 2. ID Echoing Route
router.get('/echo/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ id });
});

// 3. POST Request to Sum Numbers
router.post('/sum', (req: Request, res: Response) => {
  const { numbers } = req.body;
  if (Array.isArray(numbers)) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    res.json({ sum });
  } else {
    res.status(400).json({ error: 'Invalid input' });
  }
});

// 4. POST Request to Add Users
type TUser = {
  name: string;
  email: string;
};
const users: TUser[] = [];

router.post('/users', (req: Request, res: Response) => {
  const { name, email } = req.body;
  if (name && email) {
    users.push({ name, email });
    res.json({ message: 'User successfully added' });
  } else {
    res.status(400).json({ error: 'Name and email are required' });
  }
});

// 5. GET All Users
router.get('/users', (req: Request, res: Response) => {
  res.status(201).json({ users });
});

export default router;
