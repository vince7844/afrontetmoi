import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FormInput from './FormInput';
import { AppContext } from '../../App';
import axios from 'axios';
import { useState } from 'react';
import { COLOR } from '../../assets/colors/constant.colors';

const Profile = () => {
  const { userProfile, setUserProfile } = useContext(AppContext);
  const [randomPicture, setRandomPicture] = useState('')
  const [changePicture, setChangePicture] = useState(false)
  const { register, handleSubmit } = useForm();

  const handleClickChangePicture = () => {
    setChangePicture(true)
    const headers = {
      'X-RapidAPI-Key': 'aab1cf72f3mshde38d7c2845413dp12fb3ajsn26eff76ab571',
      'X-RapidAPI-Host': 'random-user.p.rapidapi.com'
    }
    axios.get('https://random-user.p.rapidapi.com/getuser', {headers})
         .then(res => setRandomPicture(res.data.results[0].picture.medium))
         .catch(err => console.log(err))
  }   

  return (
    <div className="profile">
      <h1>Mon profil</h1>
      <form onSubmit={handleSubmit((data) => setUserProfile({...data, userPicture: randomPicture}))} className='flex justify-center mb-12'>
        <div className={`grid gap-6 grid-cols-1 bg-[${COLOR.lightgray}] rounded p-10`}>
          {
           Object.entries(userProfile).map((entry, id) => { 
              let userProfileKey = entry[0];
              let userProfileValue = entry[1];

              if(userProfileKey !== 'userPicture' && userProfileKey !== 'userPosition') {
                return <FormInput 
                          required={true}
                          register={register}
                          key={id} 
                          profileKey={userProfileKey} 
                          profileValue={userProfileValue} />
              }
            })
          }
          <div className='flex flex-col'>
            <label className='text-lg'>Poste</label>
            <select {...register("userPosition")} className='p-3 rounded'>
              <option value="Ressource Humaine">Ressource Humaine</option>
              <option value="Commercial">Commercial</option>
              <option value="Développeur">Développeur</option>
            </select>
          </div>
          <div className='photo'>
            <label className='text-lg'>Photo</label>
            <div className='flex'>
              {randomPicture === "" && changePicture ? <h4>Loading...</h4> : <img {...register("userPicture")} src={changePicture ? randomPicture : userProfile.userPicture} alt='profil' width={100} />}
              <button onClick={handleClickChangePicture} type="button" className="bg-slate-200 px-2 rounded h-12 self-center ml-5">Changer</button>
            </div>
          </div>
          <input className='bg-[#2621F3] text-white w-36 rounded mt-4 mx-auto py-2 cursor-pointer' type="submit" value="Enregistrer" />
        </div>
      </form>
    </div>
  )
}

export default Profile