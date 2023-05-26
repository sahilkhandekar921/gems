import React from 'react';
import './Header.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import WeAreGems from './wearegems/WeAreGems';
import OurPromise from './ourPromise/OurPromise';
import OurSchools from './ourSchools/OurSchools';
import OurStudents from './ourstudents/OurStudents';
import PartnerShip from './partnership/PartnerShip';
import NewsandEvents from './news&events/News&Events';
import Contact from './Contact';
import PartnerWithUs from './PartnerWithUs';
import logoImage from './images/logo.png'

const Header = () => {
  const linkData = [
    { href: '/wearegems', content: 'WeAreGems' },
    { href: '/ourpromise', content: 'Our Promise' },
    { href: '/ourschools', content: 'Our Schools' },
    { href: '/ourstudents', content: 'Our Students' },
    { href: '/partnership', content: 'Partnership' },
    { href: '/newsandevents', content: 'News and Events' },
    { href: '/contact', content: 'Contact Us' },
    { href: '/partnerwithus', content: 'Partner With Us' },
  ];

  const routeData = [
    { path: 'wearegems', element: <WeAreGems /> },
    { path: 'ourpromise', element: <OurPromise /> },
    { path: 'ourschools', element: <OurSchools /> },
    { path: 'ourstudents', element: <OurStudents /> },
    { path: 'partnership', element: <PartnerShip /> },
    { path: 'newsandevents', element: <NewsandEvents /> },
    { path: 'contact', element: <Contact /> },
    { path: 'partnerwithus', element: <PartnerWithUs /> },
  ];

  return (
    <div id="header">
      <BrowserRouter>
        <div className="header-items">
          <div>
            <Link to="/contact">Contact Us</Link>
            <Link to="/partnerwithus">Partner With Us</Link>
          </div>
          <div>
            {linkData
              .filter((obj) => obj.href !== '/contact' && obj.href !== '/partnerwithus')
              .map((obj) => (
                <Link to={obj.href}>{obj.content}</Link>
              ))}
          </div>
        </div>
        <div className='logo'>
        <img src={logoImage} alt="Logo" />
        </div>
        <Routes>
          {routeData.map((obj) => (
            <Route path={obj.path} element={obj.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Header;
