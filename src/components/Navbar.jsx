import React from 'react';
import logo from '../assets/pictures/logo.png';
import { navSections } from './NavbarSection/NavSectionsData';
import CompanyMember from './CompanyMember';
import memberPicture from '../assets/pictures/members/philipp.jpg'
import NavbarSection from './NavbarSection/NavbarSection';

const Navbar = () => {
  return (
    <nav className='h-screen p-5 bg-slate-200'>
      <img width={250} className="p-10 m-auto" src={logo} alt="logo" />
      <CompanyMember 
        memberPicture={memberPicture}
        memberName='Gérémie Ziong'
        memberPosition='Responsable RH'
        memberMail='gziong@afrontetmoi.fr'
      />
      <div className='py-14 navbar-sections'>
        {
          navSections.map((section, id) => 
          <NavbarSection 
            key={id}
            sectionIcon={section.sectionIcon}
            sectionName={section.sectionName}
            sectionPath={section.sectionPath}
        />)
        }
      </div>
    </nav>
  );
}

export default Navbar;