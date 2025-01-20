import React from "react";
import Card from "./components/card/Card";
import Input from "./components/input/Input";
import TodoItem from "./components/todo-item/TodoItem";
import TextArea from "./components/input/TextArea";
import Button from "./components/button/Button";
import "./App.css";
import { useState } from "react";
import Modal from "./components/modal/Modal";

const TODOS_MOCK = [
  {
    id: "1",
    title: "Todo 1",
    description:
      "Sa iau micul dejun dimineata",
    completed: false,
  },
  {
    id: "2",
    title: "Todo 2",
    description: "De facut tema la React",
    completed: false,
  },
  {
    id: "3",
    title: "Todo 3",
    description: "Sa citesc o carte",
    completed: true,
  },
  {
    id: "4",
    title: "Todo 4",
    description: "Lorem ipsum dolor sit ",
    completed: false,
  },
  {
    id: "5",
    title: "Todo 5",
    description: "consectetur adipisicing elit!",
    completed: true,
  },
];

function App() {
  const [todos, setTodos] = useState(TODOS_MOCK);

  const uncompletedTodos = todos.filter((todo) => !todo.completed);

  const onCreateTodoItemFn = todo =>
    <TodoItem key={todo.id} todo={todo} onDeleteTodo={() => onDeleteTodo(todo.id)} />

  const uncompletedTodosTags = uncompletedTodos.map(onCreateTodoItemFn);
  const completedTodos = todos.filter((todo) => todo.completed);
  const completedTodosTags = completedTodos.map(onCreateTodoItemFn);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTodo, setNewTodo] = useState({title: "", description: ""});

  const handleAddTodo = () => {
    if (newTodo.title.trim() !== "") {
      setTodos((oldTodos) => [
        ...oldTodos,
        {
          id: (Math.max(0, ...oldTodos.map(todo => parseInt(todo.id))) + 1).toString(),
          title: newTodo.title,
          description: newTodo.description,
          completed: false,
        },
      ]);
      setNewTodo({ title: "", description: ""});
      setIsModalOpen(false);
    }
  };

  const openModal = () =>{
    setIsModalOpen(true);
  };
  const closeModal = () =>{
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setNewTodo((prevState) => (
      {
        ...prevState,
        [name]: value
      }
    ));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddTodo();
  }
  
  const onDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));

  };
  


  return (
    <div className="App">
      <div className="app-container">
  
        {/* 
          My Todos
        */}
        <Card>
          <h1>My todos</h1>
          <Button onClick={openModal}>Add +</Button>
          <div className="list-container">
          {uncompletedTodosTags}; 
          </div>

          <div className="separator"></div>

          <h2>Completed</h2>
          <div className="list-container">
           {completedTodosTags}
          </div>
        </Card>
    
     {/* 
            This is your Create Card component.
          */}
     
        <Modal isOpen={isModalOpen} onClose={closeModal} >
          <Card>
            <h2>Create Todo</h2>
            <form onSubmit={handleSubmit}>
              <Input onChange={handleInputChange} placeholder="Title" type="text" name="title" value={newTodo.title} required/>
              <TextArea onChange={handleInputChange} placeholder="Description" name="description" value={newTodo.description} />
              <Button type="submit">Create</Button>
            </form>
          </Card>
        </Modal>
      </div>
    </div>
  );
}

export default App;
