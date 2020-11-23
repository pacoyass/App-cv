import React from 'react'
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom'
import { DataCenter } from './ContextApi/DataCenter'


function App() {
  return (
    <div className="App">
      <DataCenter>
        <Router>
          <Switch>
            <h1>hello guy's</h1>
          </Switch>
        </Router>
      </DataCenter>
    </div>
  );
}

export default App;
