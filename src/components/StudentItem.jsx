import React from 'react';

function StudentItem(props) {
  const student = props.data;
  return (
    <tr key={student.matricule}>
      <td className="t-center">{student.matricule}</td>
      <td>{student.nom}</td>
      <td>{student.prenom}</td>
      <td>{student.genre}</td>
      <td>{student.filiere}</td>
    </tr>
  );
}

export default StudentItem;
