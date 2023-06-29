import React from 'react';
import StudentItem from './StudentItem';

function StudentsList(props) {
  const students = props.data
  return (
    <>
      <h3 className="section-title">{props.title}</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Matricule</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Genre</th>
            <th>Filière</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentItem data={student} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default StudentsList;
