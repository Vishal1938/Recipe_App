import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'



const NavBar = () => {
  // Initialize a state variable for managing the active tab
 
  return (
    <div className='NavBar'> 
      <div className='Icon'>
        <img id="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAw1BMVEX///8wMDAAAAATExPh4eEhISGQkJCsrKwXFxcqKiotLS38/Pz4+PhoaGgmJia+vr5aWlrt7e3Pz8+GhoZLS0va2to3NzdycnJ/f3/JyclERESZmZmhoaGzs7MLCwtfX1+9AAD59O3z3uLtvb3ZlI7QYVzAVE7p2tjPnpnCPzjKAADDNTH76ufqx8fGUk/CGhDq08xNQknq9fHltq7uyL+4Gw/CLCfQeXDDbWogMiwaDBbKYmDboJnJTEKHfoPbrZ7KbV/n+QZUAAADhklEQVRoge2Z7ZLbJhRA0RVIQkhCYJCEPu100zTtNnWySds0adP3f6qCdpPdtnb/rMXONJwZ2xpZ4yPw5XJBCAUCgUAgEAgEAoHAVw57QrcZpyfRF2omWYzdoUe/7kq+I1EU0dq0rfEnxpRUJI8cOSWEGG+tHrLoIdXiyYvQ2tH30Npbm+VMH4rnyZPXYurqXqw8ii3Ll1ZT4Tep7D43Ou+FTy9CKYloRSpqw6vwa5ZQ1V3S1TRr/YqR6HUhtChwufNsRiKhABANDPsW57fZJPMdYCyyo8pGmH2r/c6ULnNXu7SzH3Hq0XsoFI0I5y2fYpe1fcAOz765ev7tiyqirVSyx32eNz7+6cN3L/f7/fc/vCC2r7VBXJTUjxmh6x+vXv20P0Z53rvIYsSmT39J7HC0TY1IK5BYqqjym8Qk2NiO89iOLaI9loCFlrUrw9yLllL76m4x9PRBOZQT2ide5mjeZHn0d3KScw/i+Z/e1b19LYbhhNepM72xeaGnzZsnUX2myZZYbmoeyFkzSTY1tzE5R7Ztd6fJecbttFhr/F9ovdGsJWzFN8fnmQHUNmaWjqM6lUbuRnQ/DhtmsvLccN58QAdzMG9qZk/X5rY6a954b4qfnyW3rkqGOM5OEcfbTpIWPaUn2boYCvy/KSSXp9Yv4rYKsV9pY7aoSNJ1B4r/293cLWFlby/IdhdfXCVQcs3V7La+vvw4e2A20KfadFCuZy/nN7Cz/W3XrvawVKUreVhaq1avZpbsRP76zfXNW5RCauvErq7Hx69r19tfmkKUyglHaMoGRsQ6UGUVc2dOYOIgj++e//wLqnskCVkUlI9Ws5urX9++79A4MOLWNi1DrAU8WTsSKhJNZ6BDyW/owxU6vLtOQajG/icpDI9u9PXH32/e/4EYs92NEurCV1RJ27jvJPB+cXuAuxm9+mTNxxQMrPVnrS6yj7B83v3p1oOi6cp1LsYwKeIWchPo4/7Plx/slQb0/ZWPhsM6DzExgXsoZmDaZa7xI8i+jpRARfb6zbOPN/YORpG5a1leXsBrg6yDVmKzENxHHPO8L3SsJB7jFjWdnEtm701xrBNYe37Qcpkv9NyODZXLJCnCCmZQNoRMbk+0wsV26sacaVwmaW0XF51d5VSXqxIEn9bkWJjUFHcn3EpdY8S0dEIzcXw7CvXEPe95BwKBQCAQCAQCgUDg6+Av9LA50kVNhMUAAAAASUVORK5CYII="
        
        />
        <img src="https://mytheme.io/recipes/wp-content/uploads/logo.svg"/>
      </div>
      <div className='menus'>
       
          <Link to='/'><h3>Home</h3></Link>
          <Link to='/recipes'><h3>All Recipe</h3></Link>
          <Link to='/Members'><h3>Member</h3></Link>
          <Link to='/Login'><h3>Login</h3></Link>
          <Link to='/Blogs'><h3>Blog</h3></Link>

      </div>
    </div>
  );
};

export default NavBar;
