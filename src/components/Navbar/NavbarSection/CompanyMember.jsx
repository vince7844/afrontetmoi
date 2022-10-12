import React from 'react';

const CompanyMember = ({ memberPicture, memberName, memberPosition, memberMail }) => {
  return (
    <div className='flex text-left justify-evenly'>
      <img className='w-[90px] h-24 mr-2 rounded-xl' src={memberPicture} alt="company member" />
      <div className='flex-1 self-center ml-2'>
        <h2 className='text-xl'>{memberName}</h2>
        <p className='text-base'>{memberPosition}</p>
        <p className='text-base  text-[#2621F3]'>{memberMail}</p>
      </div>
    </div>
  );
};

export default CompanyMember;