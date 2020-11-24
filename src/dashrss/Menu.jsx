import React from 'react';
import './Dash.css';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div className="home ">
        <div className="container-fluid ">
          <div className="row ">
            <div className="col-md-2 col-sm-1 hidden-xs" id="navigation">
              

              <div className="navi ">
                <ul >
                  <li><a href="#"><i className="fa fa-home" aria-hidden="true" /><span className="hidden-xs hidden-sm">Home</span></a></li>
                  <li><a href="#"><i className="fa fa-tasks" aria-hidden="true" /><span className="hidden-xs hidden-sm">Workflow</span></a></li>
                  <li><a href="#"><i className="fa fa-bar-chart" aria-hidden="true" /><span className="hidden-xs hidden-sm">Statistics</span></a></li>
                  <li><a href="#"><i className="fa fa-user" aria-hidden="true" /><span className="hidden-xs hidden-sm">Calender</span></a></li>
                  <li><a href="#"><i className="fa fa-calendar" aria-hidden="true" /><span className="hidden-xs hidden-sm">Users</span></a></li>
                  <li><a href="#"><i className="fa fa-cog" aria-hidden="true" /><span className="hidden-xs hidden-sm">Setting</span></a></li>

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
            <div className="col-md-10 col-sm-11 display-table-cell v-align">
         
        
              
                 
            </div>
          </div>
        </div>
        
    
       
      </div>











      
    );
  }
