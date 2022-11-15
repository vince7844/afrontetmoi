import React from 'react';
import { COLOR } from '../../assets/colors/constant.colors';
import './TestingSessions.styles.css';
import { sessionsData } from './Sessions.data';
import Session from './Session';
import Modal from 'react-modal';
import { useState } from 'react';

const TestingSessions = () => {
  const [openModal, setOpenModal] = useState(false)
  const sessionInputLabels = ["Nom de session", "Participants"];
  const sessionDateLabels = ["Date de début", "Date de fin"]
  const buttonStyle = "rounded-lg p-[15px] bg-[#7480da] text-[#FFF] my-5"
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

  const onCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <div className='testing-sessions'>
      <h1>Sessions de test</h1>
      <div className={`important-testing-sessions border-t-[1px] border-[${COLOR.lightgray}] h-52 p-8`}>
        <h4>Sessions importantes</h4>
      </div>
      <button className={buttonStyle} onClick={() => setOpenModal(true)}>Ajouter une session</button>
      <table className="w-full border-collapse border-spacing-2">
        <thead className={`p-3 bg-[${COLOR.lightgray}] uppercase text-[#727272] font-bold`}>
          <tr>
            <th>Sessions</th>
            <th>Participants</th>
            <th>Date début</th>
            <th>Date fin</th>
            <th></th>
          </tr>
        </thead>
        <tbody className='h-60 border-spacing-px'>
        { sessionsData.map((session, id) =>  
            <Session 
              key={id}
              sessionName={session.name}
              sessionParticipants={session.participants}
              sessionBeginDate={session.date_debut}
              sessionEndingDate={session.date_fin} />
        )}
        </tbody>
      </table>
      <Modal
        isOpen={openModal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={onCloseModal}
        style={modalStyle}
        contentLabel="Example Modal"
      >
        <div className='flex justify-between mb-6'>
          <h2 className='text-lg'>Ajouter une session</h2>
          <button className='text-lg' onClick={onCloseModal}>X</button>
        </div>
        <form className=''>
          { sessionInputLabels.map(sessionName => 
              <div className='flex flex-col my-4'>
                <label className='my-2'>{sessionName} :</label>
                <input placeholder={sessionName} className='border border-stone-500 p-2 rounded w-full'/>
              </div>  
          )}
          { sessionDateLabels.map(sessionName => 
              <div className='flex flex-col my-4'>
                <label className='my-2'>{sessionName} :</label>
               
              </div>  
          )}
          <input className={`${buttonStyle} w-60 cursor-pointer`} type="submit" value="Ajouter" />
        </form>
      </Modal>
    </div>
  )
}

export default TestingSessions