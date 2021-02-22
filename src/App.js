import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NavBar from './components/NavBar';
import FooterNavs from './components/FooterNavs';
import Footer from './components/Footer';

function App() {
  return (
    <main className="App">
      <NavBar />     
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Projects}/>
        <Route exact path="/" component={Home}/>
      </Switch>
      <FooterNavs />
      <Footer style={{ borderTop: "solid px #61dafb" }} />
    </main>
  );
}

export default App;
