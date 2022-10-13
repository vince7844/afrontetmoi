import React from 'react'

const Session = ({ sessionName, sessionParticipant, sessionBeginDate, sessionEndingDate }) => {
  return (
    <tr>
      <td>{sessionName}</td>
      <td>{sessionParticipant}</td>
      <td>{sessionBeginDate}</td>
      <td>{sessionEndingDate}</td>
      <td>Edit</td>
    </tr>
  )
}

export default Session