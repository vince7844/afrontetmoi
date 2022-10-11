import React, { useContext } from 'react';
import logo from '../../assets/pictures/logo.png';
import { navSections } from './NavbarSection/NavSectionsData';
import CompanyMember from './NavbarSection/CompanyMember';
import NavbarSection from './NavbarSection/NavbarSection';
import { Link } from 'react-router-dom'
import { AppContext } from '../../App';

const Navbar = () => {
  const { userProfile } = useContext(AppContext)

  return (
    <nav className='h-full p-6 bg-[#f5f5f5]'>
      <Link to='/'>
        <img width={250} className="p-10 m-auto" src={logo} alt="logo" />
      </Link>
      <CompanyMember 
        memberPicture={userProfile.userPicture}
        memberName={userProfile.userFirstname + " " + userProfile.userLastname}
        memberPosition={userProfile.userPosition}
        memberMail={userProfile.userEmail}
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