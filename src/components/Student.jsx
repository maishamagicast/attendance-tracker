import React from 'react';

function Student({ student, onToggle }) {
  // TODO 5: Add an onClick to the button to trigger onToggle with student id

  return (
    <div className={`student-card ${student.present?'present':'absent'} `}>
      <span>{student.name}-{student.present ? 'Present':'Absent'}</span>
      <button onClick={()=>onToggle(student.id)}>
        {student.present ? 'Mark Absent' : 'Mark Present'}
      </button>
    </div>
  );
}

export default Student;
