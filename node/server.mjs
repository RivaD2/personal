import express from 'express';
import morgan from 'morgan';

const app = express();
const PORT = 3000;

// Middleware
// logging middleware
app.use(morgan('tiny'));
app.use(express.json());

const fakeDB = [];

// If I POST to /task, a task will be created and be added to DB
// If I do a GET request to /task, I will receive all tasks
// Using HTTpie for testing

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.get('/task', (req, res) => {
  res.status(200).json(fakeDB);
});

app.post('/task', (req, res) => {
  const newTask = {
    id: Date.now(),
    text: req.body.text,
  }

  fakeDB.push(newTask);
  res.status(201).json(newTask);
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

