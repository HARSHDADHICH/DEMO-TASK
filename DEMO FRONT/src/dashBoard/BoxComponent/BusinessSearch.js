import React, { useState } from 'react';
import './MyProfile.css';


function BusinessSearch (){
         const borderStyles = {
                  border: '2px solid red', // Example border style, you can adjust this
                  padding: '10px', // Example padding
                };
         return(
                  <div className='MyProfile_ParentBox'>
                           <div className='MyProfile_ChildBox'  style={borderStyles}>
                           <h1>Business Search component</h1>
                           </div>
                          

                  </div>
         )
}

export default BusinessSearch;