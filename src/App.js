import React from 'react';
import './App.css';
import AOS from 'aos'
import 'aos/dist/aos.css';

import Main from './components/Main';
import Header from './components/Header';
import SavingHabit from './components/SavingHabit';
import FamilyFriends from './components/FamilyFriends';
import Deposit from './components/Deposit';
import OneOfAKind from './components/OneOfAKind';
import Footer from './components/Footer';


AOS.init()

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <SavingHabit />
      <FamilyFriends />
      <Deposit />
      <OneOfAKind />
      <Footer />
    </div>
  );
}

export default App;
