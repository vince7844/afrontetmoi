import React from 'react'

const Session = ({ sessionName, sessionParticipants, sessionBeginDate, sessionEndingDate }) => {
  return (
    <tr>
      <td>{sessionName}</td>
      <td className='flex'>{sessionParticipants.map((participant, id) => 
         <img key={id} src={participant.picture} className={`rounded-full border-2 border-slate-50`} alt="participantpic" width={50} height={50} />
      )}</td>
      <td>{sessionBeginDate}</td>
      <td>{sessionEndingDate}</td>
      <td>Edit</td>
    </tr>
  )
}

export default Session