import React from 'react';
import { useState } from 'react'
import Headers from './components/Headers';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

function App() {

  return (
    <div>

      {/* header section */}
      <Headers></Headers>

      {/* todo section */}
      <div>

        <TodoList></TodoList>
      </div>

      

      {/* footer section */ }
    <Footer></Footer>
    </div >
  );
}

export default App;
