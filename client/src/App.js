import React from 'react';
import AppComponent from './components/AppComponent';
import {Router} from "@reach/router"
import DetailComponent from "./components/DetailComponent"

function App() {
  return (
    <div className="App">
      <Router>
        <AppComponent path="/" />
        <DetailComponent path="/:id" />

      </Router>
    </div>
  );
}

export default App;
