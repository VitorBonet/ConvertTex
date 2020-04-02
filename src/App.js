import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import TextArea from './components/TextArea';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <TextArea />
      <Footer />
    </div>
  );
}

export default App;