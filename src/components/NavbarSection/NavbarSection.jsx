import React from 'react'
import { Link } from 'react-router-dom'

const NavbarSection = ({sectionIcon, sectionName, sectionPath}) => (
  <Link to={sectionPath}>
    <div className='flex my-4 mx-7'>
      <img width={35} alt={sectionName} src={sectionIcon} />
      <h4 className='self-center ml-5'>{sectionName}</h4>
    </div>
  </Link>
)

export default NavbarSection