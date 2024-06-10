// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Quiz />
      </main>
    </div>
  );
}

export default App;
