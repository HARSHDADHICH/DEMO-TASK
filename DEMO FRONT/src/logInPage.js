import React, { useState } from 'react';
import './logInPage.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ForgotPassword from 'LogIn_Page/forgotPassword';



// This function deals 
function App() {
  const [emailID, setEmailID] = useState('');
  const [password, setPassword] = useState('');
  const [condition,setCONDITION]=useState(false);

  let res = "";
  
  
  const navigate = useNavigate();
  

  const submit = async (event) => {
    event.preventDefault();
    if (emailID.trim() === '' || password.trim() === '') {
      alert('Please enter both email and password');
      return;
    }
    console.log(emailID);
    console.log(password);

    try {
      const response = await axios.post('http://localhost:8000/', { emailID, password });
      console.log(response.data.message);
      alert(response.data.message);
      res=response.data.message;
      
      if(res=="Email and password match.")
      {
       navigate('/dashboard');
      }
      if(res=="Invalid email or password."){
          setCONDITION(true);
      }
      else{
        setCONDITION(false);
      }

    } catch (error) {
      console.error(error);
      console.log('Error occurred');
    }
  };

  return (
    
      <div className="App1">
        <div className="image-container1">
          <img src={process.env.PUBLIC_URL + '/images/log_in_pic.png'} alt="Sign-Up Logo Picture" />
        </div>
        <div className="login-details">
          <div className="Logo_Name">
            <img src={process.env.PUBLIC_URL + '/images/logo_2.png'} alt="logo image" />
          </div>
          <div className="no-Account">
            <p>
              <Link to="/signup"   >
                <button  className="sign-up">
                Don't have an account! Sign up
                </button>
              </Link>
            </p>
          </div>
          <div className="login-form">
            <h2>Hello! Let's get started</h2>
            <form>
              <label htmlFor="username">Enter your details below. </label>
              <br />
              <div className="email-box">
                <img id="email-image" src="../images/Email.png" alt="email logo" />
                <input
                  id="email-input"
                  type="text"
                  name="username"
                  placeholder="Enter Email Address"
                  onChange={(e) => {
                    setEmailID(e.target.value);
                  }}
                />
                <br />
              </div>
              <div className="password-box">
                <img id="password-image" src="../images/password.png" alt="password logo" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <br />
              </div>
              <button type="submit" onClick={submit} id="bn">
                LOG IN
              </button>
              <br></br>
              {condition && <ForgotPassword />}
            </form>
          </div>
        </div>
      </div>
      
     
  );
}

export default App;
