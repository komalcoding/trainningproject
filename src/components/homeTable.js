import React from "react";
import Student from "./student";
import {useState, useEffect} from "react";

function HomeTable(props) {

  const editStudentHandler=props.editStudentHandler;
  var init_students = [];
  // var init_students = [
  //   {
  //     name: "Pragya",
  //     marks: "91",
  //     mobile: "+91 123452340",
  //     enrollment: "18ETCSB001",
  //   },
  //   {
  //     name: "Shivji",
  //     marks: "92",
  //     mobile: "+91 123452340",
  //     enrollment: "18ETCSB002",
  //   },
  //   {
  //     name: "Radhe",
  //     marks: "93",
  //     mobile: "+91 123452340",
  //     enrollment: "18ETCSB003",
  //   },
  //   {
  //     name: "Intekhab",
  //     marks: "94",
  //     mobile: "+91 234567740",
  //     enrollment: "18ETCSB004",
  //   },
  // ];
  //How to start json-server
  //npx install json-server
  // npx json-server --watch data/students.json --port 2000


  const [students, setStudents] = useState(init_students);

  useEffect(()=>{
    //console.log("Use Effect called");

    fetch('http://localhost:2000/students')
    .then((res)=>{
      //console.log("response:"+res);
      return res.json()})
    .then(students=>{console.log(students)
      setStudents(students);
    
    })
  },[]);

  // const renderStudent = (student) => {
  //   return (
  //     <Student
  //       name={students[0].name}
  //       marks={students[0].marks}
  //       mobile={students[0].mobile}
  //     />
  //   );
  // };


  /*
  {if( student.enrollment !== enrollment){
        console.log("unmatched");
        return true;
      }else{
      
        console.log("matched | " + student.enrollment +"|"+ enrollment)
        return false;
      }
      return false;
    }
     */
  const deleteHandler = (enrollment) => {
    console.log('calling delete ' + enrollment);
    const updatedStudents = students.filter(
      (student) => student.enrollment !== enrollment);
    console.log(updatedStudents);
    setStudents(updatedStudents);
  };

  const editHandler = (student)=>{
    console.log("student1:"+student);
    editStudentHandler(student);
  }
  return (
    <div className="homeTableStyle">
      {students.map((student) => {
        return (
          <Student
            name={student.name}
            email={student.name}
            marks={student.marks}
            mobile={student.mobile}
            key={student.enrollment}
            enrollment={student.enrollment}
            deleteHandler={deleteHandler}
            editHandler = {editHandler}
          />
        );
      })}
    </div>
  );
}

export default HomeTable;

