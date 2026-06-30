import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchForm from './components/SearchForm';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <Hero />
      <SearchForm />
    </div>
  );
}

export default App;
