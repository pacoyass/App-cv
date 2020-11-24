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
            <Link to="/AddExperience">AddExperience</Link>
          </li>
          <li>
            <Link to="/Addformation">Addformation</Link>
          </li>
          <li>
            <Link to="/Addloisir">Addloisirs</Link>
          </li>
          <li>
            <Link to="/Addprofile">Addprofile</Link>
          </li>
          <li>
            <Link to="/AddCompetence">AddCompetence</Link>
          </li>
         
        </ul>
      </div>
     
    </div>
    
          );
        }
     











  