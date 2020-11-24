import React from 'react'
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom'
import AddExperience from './dashbord/AddExperience';
import Addformation from './dashbord/Addformation';
import Addloisirs from './dashbord/Addloisirs';
import Addprofile from './dashbord/Addprofile';
import { Datacenter1 } from './ContextApi/Datacenter1';
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './dashrss/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import {Datacenter2} from './ContextApi/Datacenter2';
import {Datacenter3} from './ContextApi/Datacenter3';

=======
import AddCompetence from './dashbord/AddCompetence';
>>>>>>> 2128111c947042650b62f22533294e24467fe3d3



function App() {
  return (
    <div className="App">
      <Datacenter1>
       
         <Datacenter2>
        <Datacenter3> 
        <Router>
           <Menu/>
          <Switch>
<<<<<<< HEAD
           
           <Route exact path="/addexperience" component={AddExperience}/> 
           <Route exact path="/addformation" component={Addformation}/>  
           <Route exact path="/addloisir" component={Addloisirs}/> 
           <Route exact path="/addprofile" component={Addprofile}/> 
  
          </Switch>
=======
           <Route exact path="/AddExperience" component={AddExperience}/> 
           <Route exact path="/Addformation" component={Addformation}/>  
           <Route exact path="/Addloisir" component={Addloisirs}/> 
           <Route exact path="/Addprofile" component={Addprofile}/> 
           <Route exact path="/AddCompetence" component={AddCompetence}/> 
           <Route exact path="/dashbord" component={Menu}/>
           </Switch>
>>>>>>> 2128111c947042650b62f22533294e24467fe3d3
        </Router>
         </Datacenter3>
        </Datacenter2> 
        </Datacenter1>
    </div>
  );
}

export default App;
