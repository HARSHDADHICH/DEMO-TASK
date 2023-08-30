import React, { useState } from 'react';
import 'dashBoard/Components/navbar.css';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Profile from 'dashBoard/Components/profilesection';
import Bottomstripe from 'dashBoard/Components/bottomstripe';
import { useMyContext } from 'helpers/context';
import MyProfile from 'dashBoard/BoxComponent/MyProfile';
import Dashboard from 'dashBoard/BoxComponent/Dashboard';
import NavvBar from 'dashBoard/Components/NavBar';
import NotSideBar from 'dashBoard/Components/NotNavBar';

function Navbar() {
const {expanded,setExpanded,} = useMyContext();
  



  return (
    <div className={`container ${expanded ? 'expanded' : ''}`}>
      <NavvBar/>
     <NotSideBar/>
    </div>
  );
}

export default Navbar;
