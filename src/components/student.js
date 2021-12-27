
import React from 'react'

function Student({name, email, enrollment, mobile, marks, deleteHandler, editHandler}/* props */) {

   //console.log(props);


    //const {name, email, enrollment, mobile, marks}= props;//destructuring of object

    // var name = props.name;
    // var email = props.email;
    // var enrollment = props.enrollment;
    // var mobile= props.mobile;
    // var marks = props.marks;
//  const deleteHandler1= (enrollment)=>{
//      console.log(enrollment)
//     // alert('calling delete ' +enrollment);
//  }

    return (
        <div style={{border:'1px solid blue'}}>
            <h1>Name: {name}</h1>
            <h2>Email: {email}</h2>
            <h3>Enrollment Number: {enrollment}</h3>
            <h3>Mobile:{mobile}</h3>
            <h4>Marks:{marks}</h4><br/>            
            <input type="button" value ="Edit " onClick={()=>editHandler({'name':name, 'email':email, 'enrollment':enrollment, 'mobile':mobile, 'marks':marks})}/>
            <input type="button" value ="Delete " onClick={()=>deleteHandler(enrollment)}/>
            <br/>

            
        </div>
    )
}

export default Student;