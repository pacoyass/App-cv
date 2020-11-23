import React from 'react'
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom'

import AddExperience from './dashbord/AddExperience';
import Addformation from './dashbord/Addformation';
import Addloisirs from './dashbord/Addloisirs';
import Addprofile from './dashbord/Addprofile';
import { Dashbord } from './ContextApi/Dashbord';
import Menu from './dashbord/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';



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
           <Route exact path="/dashbord" component={Menu}/>
          </Switch>
        </Router>
        </Dashbord>
    </div>
  );
}

export default App;
