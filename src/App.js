import React from 'react'
import Showcv from './dashbord/Showcv';
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom'
import AddExperience from './dashbord/AddExperience';
import Addformation from './dashbord/Addformation';
import Addloisirs from './dashbord/Addloisirs';
import Addprofile from './dashbord/Addprofile';
import { Datacenter1 } from './ContextApi/formation crud/Datacenter1';
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './dashbord/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Datacenter2} from './ContextApi/experience crud/Datacenter2';
import {Datacenter3} from './ContextApi/compétence crud/Datacenter3';
import { AddCompetence } from './dashbord/AddCompetence';
import './App.css'
import Langue from './dashbord/Langue';
import Datacenter4 from './ContextApi/laungue curd/Datacenter4';
import Datacenter5 from './ContextApi/loisir crud/Datacenter5';
import { Dataprof } from './ContextApi/profile crud/Dataprof';
import Updatefromation from './updates/Updatefromation';
<<<<<<< HEAD
import Updatexperience from './updates/Updatexperience';
import Updateprofile from './updates/Updateprofile';
=======
import Updateloisir from './updates/Updateloisir';
import Updatelangue from './updates/Updatelangue';
>>>>>>> a9f05903d7ff338f63d8a265b153f17999a23ae2



function App() {

  return (
     
     
 
    <div className="App"> 

      
         <Datacenter1>
         <Datacenter2>
         <Datacenter3> 
          <Datacenter4>
            <Datacenter5>
              <Dataprof>
        <Router>
          <Menu/>
          <Switch>
            <Route exact path="/showcv" component={Showcv}/>
            <Route exact path="/updateprof/:id" component={Updateprofile}/>
            <Route exact path="/Addprofile" component={Addprofile}/>
            <Route exact path="/Updatexperience" component={Updatexperience}/>
           <Route exact path="/AddExperience" component={AddExperience}/> 
           <Route exact path="/Addformation" component={Addformation}/>  
           <Route exact path="/Addloisir" component={Addloisirs}/> 
           <Route exact path="/Addprofile" component={Addprofile}/> 
           <Route exact path="/AddCompetence" component={AddCompetence}/> 
           <Route exact path="/Langue" component={Langue}/> 
           <Route exact path="/updateformation/:id" component={Updatefromation}/> 
           <Route exact path="/updateloisir/:id" component={Updateloisir}/>
           <Route exact path="/updatelangue/:id" component={Updatelangue}/> 
           
           </Switch>
        </Router>
        </Dataprof>
        </Datacenter5>
        </Datacenter4>
         </Datacenter3>
         </Datacenter2> 
         </Datacenter1>

    </div>
    
    
   
  );
}

export default App;
