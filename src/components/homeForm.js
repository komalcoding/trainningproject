import React from 'react'
import { useState } from 'react';


function HomeForm() {

    const resetButtonStyle = {margin:'5px', padding:'3px',fontSize:'25px', backgroundColor:'red', borderRadius:'8px'};
    const submitButtonStyle ={margin:'5px', padding:'3px',fontSize:'25px', backgroundColor:'green', borderRadius:'8px'};

const empty_Student = { 
  name:'abc',
  email:'',
  enrollmentNo : '',
  mobile: '',
  marks :''
};


    const [student, setStudent]=useState(empty_Student);

    const updateHandler = ()=>{        
      var student2={...student, mobile:'+1 98654425222'};
     setStudent(student2);
    }


    const changeNameHandler = (event)=>{  

      //var field =  event.target.name;

      //var newValue =  event.target.value;  
      // console.log('field:'+field);
      // console.log('newValue:'+newValue);
      var student2={...student, name:event.target.value };
     setStudent(student2);
    }

    const changeEmailHandler = (event)=>{        
      var student2={...student, email:event.target.value};
    setStudent(student2);
    }

    const changeEnrollmentHandler = (event)=>{        
      var student2={...student, enrollmentNo:event.target.value};
    setStudent(student2);
    }


    const changeMobileHandler = (event)=>{        
      var student2={...student, mobile:event.target.value};
    setStudent(student2);
    }
    const changeMarksHandler = (event)=>{        
      var student2={...student, marks:event.target.value};
    setStudent(student2);
    }

    // const resetHandler = ()=>{     
    //  setStudent(empty_Student);
    // }




    return (
        <div className="homeFormStyle">
          <div style={{minHeight:'700px'}}>
            <h1>Name: <input type="text" id="studentName" name='name' value={student.name} onChange={(event)=>{changeNameHandler(event)}}/></h1>
             <h1>Email: <input type="text" id="studentEmail" name='email' value={student.email} onChange={(event)=>{changeEmailHandler(event)}}/></h1>
            <h1>E. Number: <input type="text" id="studentEnrollment" name='enrollmentNo' value ={student.enrollmentNo}  onChange={(event)=>{changeEnrollmentHandler(event)}} /></h1>
            <h1>Mobile:<input type="text" id="studentMobile" name='mobile' value={student.mobile}  onChange={(event)=>{changeMobileHandler(event)}}/></h1>
            <h1>Marks:<input type="text" id="studentMarks" name='marks' value={student.marks}  onChange={(event)=>{changeMarksHandler(event)}}/></h1>
        {/* </div>
        <div style={{minHeight:'100px', margin:'10px'}}> */}
            <input style={resetButtonStyle}    type="submit" value="Reset"  />
            <input style={submitButtonStyle} type="submit" value="Save"/>
            <input style={resetButtonStyle}  type="submit" value="Update" />
        </div>
      </div>
    )
}

export default HomeForm

