import React from 'react'
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom'
import { DataCenter } from './ContextApi/DataCenter'
import AddExperience from './dashbord/AddExperience';
import Addformation from './dashbord/Addformation';
import Addloisirs from './dashbord/Addloisirs';
import Addprofile from './dashbord/Addprofile';
import { Dashbord } from './ContextApi/Dashbord';
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashbss from './dashrss/Dashbss';



function App() {
  return (
    <div className="App">
      <Dashbord>
         <DataCenter2>
        <DataCenter3> 
        <Router>
          <Dashbss/>
          <Switch>
           <Route exact path="/addexperience" component={AddExperience}/> 
           <Route exact path="/addformation" component={Addformation}/>  
           <Route exact path="/addloisir" component={Addloisirs}/> 
           <Route exact path="/addprofile" component={Addprofile}/> 
          </Switch>
        </Router>
         </DataCenter3>
        </DataCenter2> 
        </Dashbord>
    </div>
  );
}

export default App;
