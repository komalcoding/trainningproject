import React from "react";
import Student from "./student";

function HomeTable() {
  var students = [
    { name: "Pragya", marks: "91", mobile: "+91 123452340" },
    { name: "Shivji", marks: "92", mobile: "+91 123452340" },
    { name: "Radhe", marks: "93", mobile: "+91 123452340" },
    { name: "Intekhab", marks: "94", mobile: "+91 234567740" },
  ];

  const studentList = students.map((student) =>  
   <Student name={students[0].name} marks={students[0].marks} mobile={students[0].mobile}  />
  ); 

  return (
    // <div className="homeTableStyle">      
    //   <Student name={students[0].name} marks={students[0].marks} mobile={students[0].mobile} />
    //   <Student name={students[1].name} marks={students[1].marks} mobile={students[1].mobile} />
    //   <Student name={students[2].name} marks={students[2].marks} mobile={students[2].mobile} />
    //   <Student name={students[3].name} marks={students[3].marks} mobile={students[3].mobile} />
    // </div>
<div className="homeTableStyle">
  {studentList}
</div>

  );
}

export default HomeTable;
