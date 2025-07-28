const { TODOS_FILE } = require('../config');
const { readJSON, writeJSON } = require('../utils/file');

function getTodosByUser(username) {
  return readJSON(TODOS_FILE).filter(t => t.user === username);
}

function addTodo(todo) {
  const todos = readJSON(TODOS_FILE);
  todos.push(todo);
  writeJSON(TODOS_FILE, todos);
}

function updateTodo(id, username, updates) {
  let todos = readJSON(TODOS_FILE);
  todos = todos.map(t =>
    t.id == id && t.user === username
      ? { ...t, ...updates }
      : t
  );
  writeJSON(TODOS_FILE, todos);
}

function deleteTodo(id, username) {
  let todos = readJSON(TODOS_FILE);
  todos = todos.filter(t => !(t.id == id && t.user === username));
  writeJSON(TODOS_FILE, todos);
}

module.exports = { getTodosByUser, addTodo, updateTodo, deleteTodo };