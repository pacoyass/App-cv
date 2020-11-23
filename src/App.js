import React from 'react'
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom'
import { DataCenter } from './ContextApi/DataCenter'
import AddExperience from './dashbord/AddExperience';
import Addformation from './dashbord/Addformation';
import Addloisirs from './dashbord/Addloisirs';
import Addprofile from './dashbord/Addprofile';
import { Dashbord } from './ContextApi/Dashbord';



function App() {
  return (
    <div className="App">
      <Dashbord>
        <Router>
          <Switch>
           <Route exact path="/addexperience" component={AddExperience}/> 
           <Route exact path="/addformation" component={Addformation}/>  
           <Route exact path="/addloisir" component={Addloisirs}/> 
           <Route exact path="/addprofile" component={Addprofile}/> 
          </Switch>
        </Router>
        </Dashbord>
    </div>
  );
}

export default App;
