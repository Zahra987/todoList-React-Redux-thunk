const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
//app.use(cors({ origin : "*" } ))
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongotodolist')
.then(()=> console.log('connected to mongodb'))
.catch(()=> console.log('could not connect to mongodb'));

const todoSchema = new mongoose.Schema({
  text: String,
  date: {type: Date, default: Date.now },
  isCompleted: Boolean
});

const Todo = mongoose.model('Todo',todoSchema);

app.get('/todos',async (req, res)=>{
  const todos = await Todo.find();
  res.json({
    data: todos,
    message: 'ok'
  });
});

app.post('/todos', async (req, res)=>{
let newTodo= new Todo({
  text: req.body.text,
  isCompleted: req.body.isCompleted
});
newTodo= await newTodo.save();
res.json({
  data: newTodo,
  message: 'ok'
});
})

app.put('/todos/:id', async (req, res)=>{
  const todo = await Todo.findByIdAndUpdate(req.params.id,{
    isCompleted: !Boolean(req.body.isCompleted)
  }, {new: true });
  if (!todo) {
    return res.status(404).json({
      data: null,
      message: 'the todo was not found'
    })
  }
  res.json({
    data: todo,
    message: 'ok'
  });
});

app.delete('/todos/:id',async (req, res)=>{
  const todo = await Todo.findByIdAndDelete(req.params.id);
  if (!todo) {
    return res.status(404).json({
      data: null,
      message: 'the todo was not found'
    })
  }
  res.json({
    data: todo,
    message: 'ok'
  });
})

app.listen(3000 , ()=> console.log("listening on port 3000" ));


