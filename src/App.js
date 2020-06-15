import React from 'react';
import './App.scss';
import { InitialPage } from './components/InitialPage/InitialPage';
import { Welcome } from './components/Welcome/Welcome';
import { WhatWeDo } from './components/WhatWeDo/WhatWeDo';
import { Process } from './components/Process/Process';
import { Feautres } from './components/Feautres/Feautres';
import { Testemonials } from './components/Testemonials/Testemonials';
import { AboutUs } from './components/AboutUs/AboutUs';
import { From } from './components/From/From';
import { Contacts } from './components/Contacts/Contacts';
import { NavigationLine } from './components/NavigationLine/NavigationLine';

function App() {
  return (
    <div className="app">
      <InitialPage />
      <Welcome />
      <WhatWeDo />
      <Process />
      <Feautres />
      <Testemonials />
      <AboutUs />
      <div className="connection-wrapper limiter">
        <div className="connection">
          <From />
          <Contacts />
        </div>
      </div>
      <footer className="limiter footer-wrapper">
        <div className="limmiter-max footer">
          <p className="footer-name">Design by @mariuszdaniel</p>
          <NavigationLine />
        </div>
      </footer>
    </div>
  );
}

export default App;
