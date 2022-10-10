import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavbarSection.css'

const NavbarSection = ({sectionIcon, sectionName, sectionPath}) => {
  return (
    <NavLink className='flex my-3 mx-4 px-2 py-1' activeClassName='active' to={sectionPath}>
      <img width={35} alt={sectionName} src={sectionIcon} />
      <h4 className='self-center ml-5'>{sectionName}</h4>
    </NavLink>
  )
}

export default NavbarSection