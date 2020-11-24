import React from 'react'
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom'

import { DataCenter } from './ContextApi/DataCenter'
import AddExperience from './dashbord/AddExperience';
import Addformation from './dashbord/Addformation';
import Addloisirs from './dashbord/Addloisirs';
import Addprofile from './dashbord/Addprofile';
 
 
import 'bootstrap/dist/css/bootstrap.min.css';
import AddCompetence from './dashbord/AddCompetence';
import Menu from './dashbord/Menu';
 



function App() {
  return (
    <div className="App">
      {/* <Dashbord> */}
        <Router>
        <Menu/>
          <Switch>
        
           <Route exact path="/AddExperience" component={AddExperience}/> 
           <Route exact path="/Addformation" component={Addformation}/>  
           <Route exact path="/Addloisir" component={Addloisirs}/> 
           <Route exact path="/Addprofile" component={Addprofile}/> 
           <Route exact path="/AddCompetence" component={AddCompetence}/> 
             
           </Switch>
        </Router>
        {/* </Dashbord> */}
    </div>
  );
}

export default App;
