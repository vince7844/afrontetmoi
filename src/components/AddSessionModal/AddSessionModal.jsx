import React, { useContext } from 'react';
import Modal from 'react-modal';
import DatePicker from "react-datepicker";
import { registerLocale } from  "react-datepicker";
import fr from 'date-fns/locale/fr';
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import { AppContext } from "../../App";

registerLocale('fr', fr)

const AddSessionModal = ({ openModalValue, onCloseModal, buttonStyle }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const dateParameters = { className: 'cursor-pointer', locale: "fr", dateFormat: "Pp", showTimeSelect: true }
  const { newSessionData, setNewSessionData, setAddedNewSession } = useContext(AppContext);

  const modalStyle = {
    content: {
      width: '50%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const handleChangeSessionName = (e) => {
    setNewSessionData({
      ...newSessionData,
      sessionName: e.target.value
    })
  }
  const handleChangeParticipants = (e) => {
    setNewSessionData({
      ...newSessionData,
      participants: e.target.value
    })
  }
  const handleChangeStartDate = (beginDate) => {
    setNewSessionData({
      ...newSessionData,
      beginDate: format(beginDate, "Pp", {locale: fr}),
    })
  }
  const handleChangeEndDate = (endDate) => {
    setNewSessionData({
      ...newSessionData,
      endDate: format(endDate, "Pp", {locale: fr})
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newSessionData);
    setAddedNewSession(true);
  }

  return (
    <Modal
      isOpen={openModalValue}
      // onAfterOpen={afterOpenModal}
      onRequestClose={onCloseModal}
      style={modalStyle}
      contentLabel="Example Modal"
    >
      <div className='flex justify-between mb-6'>
        <h2 className='text-lg'>Ajouter une session</h2>
        <button className='text-lg' onClick={onCloseModal}>X</button>
      </div>
      <form className='flex flex-col py-[20px] space-y-6' onSubmit={handleSubmit}>
        <div className='session-name'>
          <label className='my-2'>Nom de session :</label>
          <input 
            onChange={handleChangeSessionName}
            placeholder="Nom de session" 
            className='border border-stone-500 p-2 rounded w-full' 
            required />
        </div>  
        <div className='participants'>
          <label className='my-2'>Participants :</label>
          <input 
            onChange={handleChangeParticipants} 
            placeholder="Participants" 
            className='border border-stone-500 p-2 rounded w-full'
            required />
        </div>  
         <div className='begin-date'>
            <label className='my-2'>Date de début :</label>
            <DatePicker 
              {...dateParameters}
              selected={startDate} 
              onChange={(date) => { setStartDate(date); handleChangeStartDate(date) }} 
            />
          </div>  
         <div className='end-date'>
            <label className='my-2'>Date de fin :</label>
            <DatePicker 
              {...dateParameters}
              selected={endDate} 
              onChange={(date) => { setEndDate(date); handleChangeEndDate(date) }} 
            />
         </div>  
         <input 
            className={`${buttonStyle} w-60 cursor-pointer`} 
            type="submit" 
            value="Ajouter" 
          />
      </form>
    </Modal>
  )
}

export default AddSessionModal;