import React,{useContext,useState,useEffect} from 'react';
// import React from 'react';
// import './Dash.css';
 
// import { Link } from 'react-router-dom';
// export default function Menu() {
//     return (
//         <div className="home">
//         <div className="container-fluid display-table">
//           <div className=" ">
//             <div className="col-md-2 col-sm-1 hidden-xs " id="navigation">
              
//               <div className="navi">
//                 <ul>  
//                   <li className="active"><a href="#"><i className="fa fa-tasks" aria-hidden="true" /><span className="hidden-xs hidden-sm text-white">Dashboard</span></a></li>
//                    <Link to="/Addformation"> <i className="fa fa-tasks" aria-hidden="true" /><span className="hidden-xs hidden-sm">Add Formation</span></Link>
//                    <Link to="/AddExperience"> <i className="fa fa-tasks" aria-hidden="true" /><span className="hidden-xs hidden-sm">Add Experience</span></Link>
//                    <Link to="/AddCompetence"> <i className="fa fa-tasks" aria-hidden="true" /><span className="hidden-xs hidden-sm">Add Competence</span></Link>
//                    <Link to="/addloisir"> <i className="fa fa-tasks" aria-hidden="true" /><span className="hidden-xs hidden-sm">Add Loisir</span></Link>
//                    <Link to="/addprofile"> <i className="fa fa-tasks" aria-hidden="true" /><span className="hidden-xs hidden-sm">Add Profile</span></Link>
//                 </ul>
//               </div>
//             </div>
           
//           </div>
//         </div>
        
    
       
import './Menu.scoped.css'
// import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';
import { procontext } from '../ContextApi/profile crud/Dataprof';
export default function Menu() {
  
    return (
      
      
      <div id="wrapper">
      {/* Sidebar */}
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
          <Link to="/showcv"> Show Cv</Link>
            
            
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
     











  