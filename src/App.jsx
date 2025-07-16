import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
// In your main layout component (App.jsx or similar)
<div className="App">

  <main className="container-fluid">
    <div className="container">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Projects />
      <Contact />
    </div>
  </main>
</div>
  );
}

export default App;