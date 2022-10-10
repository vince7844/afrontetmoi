import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import FormInput from './FormInput';
import { AppContext } from '../../App';

const Profile = () => {
  const { userProfile, setUserProfile } = useContext(AppContext);
  const { register, handleSubmit } = useForm();

  return (
    <div className="profile">
      <h1>Profil</h1>
      <form onSubmit={handleSubmit((data) => setUserProfile(data))} className='flex justify-center my-32'>
        <div className='grid gap-6 grid-cols-1'>
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
            <label>Poste</label>
            <select {...register("userPosition")}>
              <option value="Ressource Humaine">Ressource Humaine</option>
              <option value="Commercial">Commercial</option>
              <option value="Développeur">Développeur</option>
            </select>
          </div>
          <div className='photo'>
            <label>Photo</label>
            <img {...register("userPicture")} src={require('../../assets/pictures/members/philipp.jpg')} alt='profil' />
            <button type="button" className="bg-slate-200 p-2 rounded">Changer</button>
          </div>
          <input className='bg-[#2621F3] text-white w-36 rounded mt-6 mx-auto py-2 cursor-pointer' type="submit" value="Enregistrer" />
        </div>
      </form>
    </div>
  )
}

export default Profile