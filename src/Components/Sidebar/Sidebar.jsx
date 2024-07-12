import React, { useEffect, useState } from 'react';
import "./sidebar.css"
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isSidebarHidden, setSidebarHidden] = useState(window.innerWidth < 768);
  const [isSearchFormShown, setSearchFormShown] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

    allSideMenu.forEach((item) => {
      const li = item.parentElement;

      item.addEventListener('click', function () {
        allSideMenu.forEach((i) => {
          i.parentElement.classList.remove('active');
        });
        li.classList.add('active');
      });
    });

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarHidden(true);
      } else if (window.innerWidth > 576) {
        setSearchFormShown(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarHidden(!isSidebarHidden);
  };

  const toggleSearchForm = (e) => {
    if (window.innerWidth < 576) {
      e.preventDefault();
      setSearchFormShown(!isSearchFormShown);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div>
      {/* SIDEBAR */}
      <section id="sidebar" className={isSidebarHidden ? 'hide' : ''}>
        <a href="#" className="brand">
          <i className="bx bxs-smile" />
          <span className="text">AdminHub</span>
        </a>
        <ul className="side-menu top">
          <li className="active">
            <Link to="/dashboard" className='sidebar-link'>
              <i className="bx bxs-dashboard" />
              <span className="text">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/results" className='sidebar-link'>
              <i className="bx bxs-shopping-bag-alt" />
              <span className="text">My Results</span>
            </Link>
          </li>
          <li>
            <Link to="/cards" className='sidebar-link'>
              <i className="bx bxs-doughnut-chart" />
              <span className="text">All Quizzes</span>
            </Link>
          </li>
          <li>
            <Link to="/message" className='sidebar-link'>
              <i className="bx bxs-message-dots" />
              <span className="text">Message</span>
            </Link>
          </li>
          <li>
            <Link to="/scoreboard" className='sidebar-link'>
              <i className="bx bxs-group" />
              <span className="text">Scoreboard</span>
            </Link>
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <Link href="#" className='sidebar-link'>
              <i className="bx bxs-cog" />
              <span className="text">Update Profile</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="logout">
              <i className="bx bxs-log-out-circle" />
              <span className="text">Logout</span>
            </Link>
          </li>
        </ul>
      </section>
      {/* SIDEBAR */}
      {/* CONTENT */}
      <section id="content">
        {/* NAVBAR */}
        <nav>
          <i className="bx bx-menu" onClick={toggleSidebar} />
          <a href="#" className="nav-link">Categories</a>
          <form action="#">
            <div className={`form-input ${isSearchFormShown ? 'show' : ''}`}>
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn" onClick={toggleSearchForm}>
                <i className={`bx ${isSearchFormShown ? 'bx-x' : 'bx-search'}`} />
              </button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden />
          <label htmlFor="switch-mode" className="switch-mode" onClick={toggleDarkMode} />
          <a href="#" className="notification">
            <i className="bx bxs-bell" />
            <span className="num">8</span>
          </a>
          <a href="#" className="profile">
            <img src="img/people.png" alt="Profile" />
          </a>
        </nav>
        {/* NAVBAR */}
        {/* MAIN */}
        
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </div>
  );
};

export default Sidebar;
