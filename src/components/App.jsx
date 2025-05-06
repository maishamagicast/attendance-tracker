import StudentList from './StudentList';
import { useState } from 'react';
// TODO 1: Add a resetAttendance function to mark all students as absent

function App() {
  const initialStudents = [
    { id: 1, name: 'Alice', present: false },
    { id: 2, name: 'Bob', present: false },
    { id: 3, name: 'Charlie', present: false },
    { id: 4, name: 'Diana', present: false }
  ];
  
  const [students, attendanceSetter]= useState(initialStudents);

  function resetAttendance(){
    attendanceSetter(
      students.map((student)=>{
        student.present = false;
        return student;
      })
    )
  }


  // TODO 2: Create a toggleAttendance function and pass it to StudentList
  function toggleAttendance(id){
    attendanceSetter(
      students.map((student)=>
        student.id === id ? {...student, present: !student.present} :student //creates new object then updates the present value or returns the original object 
        
      )
    )
    
  }

  return (
    <div className='container'>
      <h1>🏫 Attendance Tracker</h1>
      <p>Present: <span id='present'>{students.filter((student)=>student.present).length}</span>
        <br/> 
        <br/>
        Absent: <span id='absent'>{students.filter((student)=>!student.present).length}</span>
      </p>

      {/* TODO 3: Add a Reset Attendance button here */}
      <button onClick={resetAttendance} >Reset Attendance</button>
      <StudentList students={students} onToggle={toggleAttendance} />
    </div>
  );
}

export default App;
