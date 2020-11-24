import React from 'react';
import './Dash.css';
 
import { Link } from 'react-router-dom';
export default function Menu() {
    return (
        <div className="home">
        <div className="container-fluid display-table">
          <div className=" ">
            <div className="col-md-2 col-sm-1 hidden-xs " id="navigation">
              
              <div className="navi">
                <ul>  
                  <li className="active"><a href="#"><i className="fa fa-tasks" aria-hidden="true" /><span className="hidden-xs hidden-sm text-white">Dashboard</span></a></li>
                   <Link to="/Addformation"> <i className="fa fa-tasks" aria-hidden="true" /><span className="hidden-xs hidden-sm">Add Formation</span></Link>
                   <Link to="/AddExperience"> <i className="fa fa-tasks" aria-hidden="true" /><span className="hidden-xs hidden-sm">Add Experience</span></Link>
                   <Link to="/AddCompetence"> <i className="fa fa-tasks" aria-hidden="true" /><span className="hidden-xs hidden-sm">Add Competence</span></Link>
                   <Link to="/addloisir"> <i className="fa fa-tasks" aria-hidden="true" /><span className="hidden-xs hidden-sm">Add Loisir</span></Link>
                   <Link to="/addprofile"> <i className="fa fa-tasks" aria-hidden="true" /><span className="hidden-xs hidden-sm">Add Profile</span></Link>
                </ul>
              </div>
            </div>
           
          </div>
        </div>
        
    
       
      </div>











      
    );
  }
