import React from 'react';
import './simple.css'

import { Link } from 'react-router-dom';

export default function Menu() {
    return (


      <div className="d-flex " id="wrapper">
      {/* Sidebar */}
      <div className="bg-light border-right " id="sidebar-wrapper">
        <div className="sidebar-heading">Start Bootstrap </div>
        <div className="list-group list-group-flush ">
          <a href="/Addprofile" className="list-group-item list-group-item-action bg-light">Dashboard</a>
          <a href="#" className="list-group-item list-group-item-action bg-light">Add </a>
          <a href="#" className="list-group-item list-group-item-action bg-light">Overview</a>
          <a href="#" className="list-group-item list-group-item-action bg-light">Events</a>
          <a href="#" className="list-group-item list-group-item-action bg-light">Profile</a>
          <a href="#" className="list-group-item list-group-item-action bg-light">Status</a>
        </div>
      </div>
      {/* /#sidebar-wrapper */}
      {/* Page Content */}
      {/* <div  id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          
        
            
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        
      </div> */}
      {/* /#page-content-wrapper */}
    </div>















      //   <div className="home ">
      //   <div className="container-fluid ">
      //     <div className="row ">
      //       <div className="col-md-2 col-sm-1 hidden-xs" id="navigation">
              
      //         <div className="navi">
      //           <ul>  
      //             <li className="active"><a href="#"><i className="fa fa-tasks" aria-hidden="true" /><span className="hidden-xs hidden-sm text-white">Dashboard</span></a></li>
      //             <Link to="/Addformation"> <i className="fa fa-tasks" aria-hidden="true" /><span className="hidden-xs hidden-sm">Add Formation</span></Link>
      //             <Link to="/AddExperience"> <i className="fa fa-tasks" aria-hidden="true" /><span className="hidden-xs hidden-sm">Add Experience</span></Link>
      //              <Link to="/AddCompetence"> <i className="fa fa-tasks" aria-hidden="true" /><span className="hidden-xs hidden-sm">Add Competence</span></Link>
      //              <Link to="/addloisir"> <i className="fa fa-tasks" aria-hidden="true" /><span className="hidden-xs hidden-sm">Add Loisir</span></Link>
      //              <Link to="/addprofile"> <i className="fa fa-tasks" aria-hidden="true" /><span className="hidden-xs hidden-sm">Add Profile</span></Link>

      //           </ul>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
        
    
       
      // </div>











      
    );
  }
