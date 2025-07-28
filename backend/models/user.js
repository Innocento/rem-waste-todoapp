const { USERS_FILE } = require('../config');
const { readJSON, writeJSON } = require('../utils/file');

function getUsers() {
  return readJSON(USERS_FILE);
}

function addUser(user) {
  const users = getUsers();
  users.push(user);
  writeJSON(USERS_FILE, users);
}

function findUser(username) {
  const users = getUsers();
  return users.find(u => u.username === username);
}

function validateUser(username, password) {
  const users = getUsers();
  return users.find(u => u.username === username && u.password === password);
}

module.exports = { getUsers, addUser, findUser, validateUser };