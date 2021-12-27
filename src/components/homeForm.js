import React from "react";
import { useState } from "react";

function HomeForm(props) {
  var editStudent = props.editStudent;
  var operation = props.operation;
  console.log("HomeForm:"+editStudent)
  const init_Student = {
    name: editStudent.name,
    email: editStudent.email,
    enrollment: editStudent.enrollment,
    mobile: editStudent.mobile,
    marks: editStudent.marks,
  };
  const [student, setStudent] = useState(init_Student);
  const updateHandler = () => {
    var student2 = { ...student, mobile: "+1 98654425222", marks: 96 };
    setStudent(student2);
  };

  const initializeStudent = (name, email, enrollment, mobile, marks) => {
    const student = {
      ...init_Student,
      [name]: name,
      [email]: email,
      [enrollment]: enrollment,
      [mobile]: mobile,
      [marks]: marks,
    };
    console.log("student:" + student);
    setStudent(student);
  };

  const resetHandler = () => {
    setStudent({
      'name': '',
      'enrollment': '',
      'mobile': '',
      'marks': '',
      'email': '',
    });
  };

  const changeHandler = (event) => {
    console.log("field Name: " + event.target.name);
    console.log("field Value: " + event.target.value);
    var student2 = { ...student, [event.target.name]: event.target.value };

    // dont write this ===========>student= student2;
    setStudent(student2);
  };

  const editHandler = () => {
    console.log("Going to save student: " + student);

    fetch('http://localhost:2000/students/'+student.enrollment, {
      method:'PUT',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)
    })
    .then((res)=>{
      console.log("Data has been saved:"+res);
     setStudent({
      'name': '',
      'enrollment': '',
      'mobile': '',
      'marks': '',
      'email': '',
    });
    });   

  };

  const saveHandler = () => {
    console.log("Going to save student: " + student);

    fetch('http://localhost:2000/students', {
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)
    })
    .then((res)=>{
      console.log("response:"+res);
      //return res.json()
    });   

  };

  return (
    <div className="homeFormStyle">
      <h1>Student Details:</h1>
      <div style={{ minHeight: "350px" }}>
      <label>Name:</label> 
          <input
            type="text"
            id="studentName"
            name="name"
            value={student.name}
            onChange={(event) => {
              changeHandler(event);
            }}
          />
        <label>Email:</label>
          <input
            type="text"
            id="studentEmail"
            name="email"
            value={student.email}
            onChange={(event) => {
              changeHandler(event);
            }}
          />
          <label>Enrollment:</label>
          <input
            type="text"
            id="studentEnrollment"
            name="enrollment"
            
            value={student.enrollment}
            onChange={(event) => {
              changeHandler(event);
            }}
          />
        <label>Mobile:</label>
          <input
            type="text"
            id="studentMobile"
            name="mobile"
            value={student.mobile}
            onChange={(event) => {
              changeHandler(event);
            }}
          />
      <label>Marks:</label>
          <input
            type="text"
            id="studentMarks"
            name="marks"
            value={student.marks}
            onChange={(event) => {
              changeHandler(event);
            }}
          />
      </div>
      <br/><br/>
      <div style={{ minHeight: "50px", padding: "20px" }}>
        <input
          className="resetButtonStyle"
          type="submit"
          value="Reset"
          onClick={resetHandler}
        />
        
        {/* <input
          className="updateButtonStyle"
          type="submit"
          value="Update"
          onClick={updateHandler}
        /> */}
        {operation=='add' && <input className="submitButtonStyle" type="submit" value="Save"  onClick={saveHandler}/>}
        {operation=='edit' && <input className="submitButtonStyle" type="submit" value="Update"  onClick={editHandler}/>}
      </div>
    </div>
  );
}

export default HomeForm;