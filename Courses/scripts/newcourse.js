"use strict"

window.onload = init;

const dept = document.getElementById("dept")
const courseNum = document.getElementById("courseNum")
const courseName = document.getElementById("courseName")
const instructor = document.getElementById("instructor")
const startDate = document.getElementById("startDate")
const numDays = document.getElementById("numDays")

function init () {
    const addBtn = document.getElementById("addBtn");
    addBtn.onclick = addBtnClicked;
}

function addBtnClicked () {
    let messageDiv = document.getElementById("messageDiv");
    console.log("this ran");
    let bodyData = {
        dept: dept.value,
        courseNum: courseNum.value,
        courseName: courseName.value,
        instructor: instructor.value,
        startDate: startDate.value,
        numDays: numDays.value
    };
    fetch(`http://localhost:8081/api/courses`, {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {"Content-type":
                "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(json => {
        window.location.href = "index.html";
    })
    .then(err => {
        messageDiv.innerHTML = "Unpexpected error";
    })
}



// let exampleData = {
//     id: 15,
//     dept: 'Finance',
//     courseNum: '301',
//     courseName: 'Entrepreneurship',
//     instructor: 'Zachary',
//     startDate: 'May',
//     numDays: 5
// }

