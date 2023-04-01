import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      

      <nav
        className="navbar is-primary"
        role="navigation"
        aria-label="main navigation"
      >

        <div className={`navbar-menu ${isOpen && "is-active"}`}>
          <div className="navbar-start">
            <div className="menu">
              <NavLink 
                to="/home"
                className={isActive =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
              >
                Home
              </NavLink>
                <br />
                
              <NavLink 
                to="/Review"
                className={isActive =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
              >
                Leave a Review
              </NavLink>
              <br />
              <NavLink 
                to="/Account"
                className={isActive =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
              >
                Account
              </NavLink>
              <br />

              <NavLink 
                to="/Map"
                className={isActive =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
              >
                Map
              </NavLink>
              <br />

            </div>
          </div>      
        </div>

      </nav>
    </div>
    
  );
};

export default Navbar;