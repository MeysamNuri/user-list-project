// src/App.js
import React from 'react';
import UserList from './components/UserList';
import Favorites from './components/Favorites';

function App() {
  return (
    <div>
      <UserList />
      <hr />
      <Favorites />
    </div>
  );
}

export default App;