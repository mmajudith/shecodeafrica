import React from 'react';
import Header from './components/Header'
import Objectives from './components/Objectives'
import ReachUs from './components/ReachUs'
import Testimonials from './components/Testimonials'
import Form from './components/Form'
import Footer from './components/Footer'
import './App.scss';


function App() {
  return (
    <div className="App">
      
        <Header />
        <Objectives />
        <ReachUs />
        <Testimonials />
        <Form />
        <Footer />
    
    </div>
  );
}

export default App;
