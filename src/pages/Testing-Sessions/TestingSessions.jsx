import React from 'react';
import { COLOR } from '../../assets/colors/constant.colors';
import './TestingSessions.styles.css';
import { sessionsData } from './Sessions.data';
import Session from './Session';
import Modal from 'react-modal';
import { useState } from 'react';

const TestingSessions = () => {
  const [openModal, setOpenModal] = useState(false)

  const onCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <div className='testing-sessions'>
      <h1>Sessions de test</h1>
      <div className={`important-testing-sessions border-t-[1px] border-[${COLOR.lightgray}] h-52 p-8`}>
        <h4>Sessions importantes</h4>
      </div>
      <button className='rounded-lg p-[15px] bg-[#7480da] text-[#FFF] my-5' onClick={() => setOpenModal(true)}>Ajouter une session</button>
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
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <h1>Hey</h1>
        <button onClick={onCloseModal}>Close</button>
      </Modal>
    </div>
  )
}

export default TestingSessions