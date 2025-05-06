import Student from './Student';

function StudentList({ students, onToggle }) {
  return (
    <div >
      {/* TODO 4: Map through students and render Student components */}
      {students.map((student)=>
      <Student key={student.id} student={student} onToggle={onToggle}/> 
      )}
    </div>
  );
}

export default StudentList;
