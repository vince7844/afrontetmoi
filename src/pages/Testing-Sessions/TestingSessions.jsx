import React from 'react';
import { COLOR } from '../../assets/colors/constant.colors';
import './TestingSessions.styles.css';
import { sessionsData } from './Sessions.data';
import Session from './Session';

const TestingSessions = () => {
  return (
    <div className='testing-sessions'>
      <h1>Sessions de test</h1>
      <div className={`important-testing-sessions border-t-[1px] border-[${COLOR.lightgray}] h-52 p-8`}>
        <h4>Sessions importantes</h4>
      </div>
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
              sessionParticipant={session.participants.map(participant => participant.name)}
              sessionBeginDate={session.date_debut}
              sessionEndingDate={session.date_fin} />) 
        }
        </tbody>
      </table>
    </div>
  )
}

export default TestingSessions