import React from 'react';
import './Header.scss'; 
import mymood from '../../assets/mymood.jpg'; 
import { Button } from '@mui/material';

const handleClick = () => {

alert('Learn more about MyMmmood')};

const Header = () => {
  return (
    <div className="header">
      <div className="header-image">
        <img src={mymood} alt="MyMood" className="mymood" />
        <div className="header-text">
          <h1>Welcome to MyMmmood</h1>
          <h2>A place where you can take a step back, and not feel bad about it!</h2>
          <Button className="custom-btn" variant="contained" onClick={handleClick}>
          Learn more
        </Button>
        </div>
     
      </div>
     
    </div>
  );
}

export default Header;
