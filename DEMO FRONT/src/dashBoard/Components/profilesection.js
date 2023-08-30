import React, { useState } from 'react';
 // Correct import path
//import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './profilesection.css';
import { useMyContext } from '../../helpers/context';
import Button from 'components/Button';


function Profile({ selectMenu }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { myState, updateState } = useMyContext();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  
  
         const  handleItemClick = (items) => {
                  selectMenu(items);
                  console.log(items);
         }

  return (
    <div className='Parent_profileBox'>
      <div className='profileBox'>
        <img src={process.env.PUBLIC_URL + '/images/profile_pic.png'} alt="profile pic" />
        <button className='profilename' onClick={toggleDropdown}>Profile Name</button>
      </div>
      {isDropdownOpen && ( <div className='dropdown'>
        <ul className="dropdown-list">
          <li className="profile-item" >
            <span className="profile-icon"><FontAwesomeIcon  className="icon" /></span> {/* Use the imported icon */}
           <button onClick={() => handleItemClick('Profile')}>MY Profile</button> 
          </li>
          <li className="profile-item" >
            <span className="profile-icon"><FontAwesomeIcon  className="icon" /></span> {/* Use the imported icon */}
           <button onClick={() => handleItemClick('Change Password')}>Change Password</button> 
          </li>
          <li className="profile-item" >
            <span className="profile-icon"><FontAwesomeIcon  className="icon" /></span> {/* Use the imported icon */}
           <button onClick={() => handleItemClick('Sign Out')}>Sign Out</button> 
          </li>
         
        </ul>
       
        </div>
      )}
    </div>
  );
}

export default Profile;
