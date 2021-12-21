import React from 'react'

function Student(props) {
    return (
        <div style={{border:'1px solid blue'}}>
            <h1>Name: {props.name}</h1>
            <h2>Email</h2>
            <h3>Enrollment Number</h3>
            <h3>Mobile:{props.mobile}</h3>
            <h4>Marks:{props.marks}</h4>
        </div>
    )
}

export default Student;