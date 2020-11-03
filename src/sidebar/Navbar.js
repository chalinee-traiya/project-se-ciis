import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { red } from '@material-ui/core/colors';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#FFFFFF' }}>
        {/* <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          </div> */}

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <Link to="status" className="xCross">
              {/* <AiIcons.AiOutlineClose /> */}
            </Link>
            <div></div>
            <div className="user-pic">
              <img
                className=" imgprofile"
                src="/images/profile.jpg"
                alt="User "
              />
            </div>
            <div>
              <span className="user-name">
                <strong>Jhon Smith</strong>
              </span>
            </div>
            <div>
              <span className="user-role"> Reshearcher</span>
            </div>
            <hr />

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="navbar-title">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
