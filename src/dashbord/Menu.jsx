import React from 'react';
import './Dash.css'
// import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';
export default function Menu() {
    return (
      
      
      <div id="wrapper">
      {/* Sidebar */}
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <a href="#">
             Show Cv
            </a>
          </li>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/AddExperience">Add Experience</Link>
          </li>
          <li>
            <Link to="/Addformation">Add Formation</Link>
          </li>
          <li>
            <Link to="/Addloisir">Add Loisirs</Link>
          </li>
          <li>
            <Link to="/Addprofile">Add Profile</Link>
          </li>
          <li>
            <Link to="/AddCompetence">Add Competence</Link>
          </li>
          <li>
            <Link to="/Langue">Add language</Link>
          </li>
         
        </ul>
      </div>
     
    </div>
    
          );
        }
     











  