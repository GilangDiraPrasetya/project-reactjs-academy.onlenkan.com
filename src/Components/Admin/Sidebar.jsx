import { useState, useEffect } from 'react';
import Logo from '../../Images/logo-official-blue.png';
import { Dashboard, Info, DesktopDevice, PeopleMultiple, Schedule, PeopleGroup, Briefcase, Newspaper, Gear, ThumbsUp, Percentage } from 'akar-icons';
import { Link, NavLink } from 'react-router-dom';

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleUrlChange = () => {
      const currentUrl = window.location.pathname;
      setActiveLink(currentUrl);
    };
    window.addEventListener('popstate', handleUrlChange);

    // cleanup function
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  return (
    <>
      <aside className="sidebar p-3 pb-5 bg-white d-none d-md-block position-relative">
        <Link to="/" className="d-block mx-auto sidebar-logo mb-5">
          <img src={Logo} alt="" />
        </Link>

        <p className="text-secondary fs-7 fw-semibold mb-2 ms-3">Basic</p>
        <NavLink to="/admin-academy" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 {activeLink === '/admin-academy' ? 'active' : ''}">
          <Dashboard /> Dashboard
        </NavLink>
        <NavLink to="/admin-academy/informasi" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 {activeLink === '/admin-academy/informasi' ? 'active' : ''}">
          <Info /> Update Informasi
        </NavLink>
        <p className="text-secondary fs-7 fw-semibold mb-2 ms-3 mt-4">E-Course</p>
        <NavLink to="/admin-academy/ecourses" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 {activeLink === '/admin-academy/ecourses' ? 'active' : ''}">
          <DesktopDevice /> E-Course
        </NavLink>
        <NavLink to="/admin-academy/instructor-ecourse" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 {activeLink === '/admin-academy/instructor-ecourse' ? 'active' : ''}">
          <PeopleMultiple /> Instructor
        </NavLink>
        <NavLink to="/admin-academy/manajemen-event" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 {activeLink === '/admin-academy/manajemen-event' ? 'active' : ''}">
          <Schedule /> Event
        </NavLink>
        <NavLink to="/admin-academy/members" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 {activeLink === '/admin-academy/members' ? 'active' : ''}">
          <PeopleGroup /> Member Platform
        </NavLink>
        <NavLink to="/admin-academy/review-ecourse" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 {activeLink === '/admin-academy/review-ecourse' ? 'active' : ''}">
          <ThumbsUp /> Review
        </NavLink>
        <NavLink to="/admin-academy/vouchers" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 {activeLink === '/admin-academy/vouchers' ? 'active' : ''}">
          <Percentage /> Voucher
        </NavLink>
        <p className="text-secondary fs-7 fw-semibold mb-2 ms-3 mt-4">Resource</p>
        <NavLink to="/admin-academy/source-code" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 {activeLink === '/admin-academy/source-code' ? 'active' : ''}">
          <Briefcase /> Source Code
        </NavLink>
        <NavLink to="/admin-academy/artikel" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 {activeLink === '/admin-academy/artikel' ? 'active' : ''}">
          <Newspaper /> Artikel
        </NavLink>
        <p className="text-secondary fs-7 fw-semibold mb-2 ms-3 mt-4">Manajemen Platform</p>
        <NavLink to="/admin-academy/users" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 {activeLink === '/admin-academy/users' ? 'active' : ''}">
          <PeopleMultiple /> User
        </NavLink>
        <NavLink to="/admin-academy/profil" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 {activeLink === '/admin-academy/profil' ? 'active' : ''}">
          <Gear /> My Profile
        </NavLink>
      </aside>
    </>
  );
}
