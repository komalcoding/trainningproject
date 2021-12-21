import React from "react";
import Student from "./student";
import {useState} from "react";

function HomeTable() {
  var init_students = [
    {
      name: "Pragya",
      marks: "91",
      mobile: "+91 123452340",
      enrollment: "18ETCSB001",
    },
    {
      name: "Shivji",
      marks: "92",
      mobile: "+91 123452340",
      enrollment: "18ETCSB002",
    },
    {
      name: "Radhe",
      marks: "93",
      mobile: "+91 123452340",
      enrollment: "18ETCSB003",
    },
    {
      name: "Intekhab",
      marks: "94",
      mobile: "+91 234567740",
      enrollment: "18ETCSB004",
    },
  ];

  const [students, setStudents] = useState(init_students);

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
          />
        );
      })}
    </div>
  );
}

export default HomeTable;
