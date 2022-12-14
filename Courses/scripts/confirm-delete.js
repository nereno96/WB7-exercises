"use strict";

window.onload = function () {
    const urlParams = new URLSearchParams(location.search);
    let id = -1;


    if (urlParams.has("courseid") === true) {
        id = urlParams.get("courseid");
        fetch(`http://localhost:8081/api/courses/${id}`)
        .then(response => response.json())
        .then(data => {
            showCourseInfo(data);
            const deleteBtn = document.getElementById("deleteBtn");
            deleteBtn.onclick = deleteBtnClicked(data);
        })
    }
};

function showCourseInfo (data) {
    let courseInfoPara = document.getElementById("courseInfoPara");
    courseInfoPara.innerHTML = `<span class="fw-bold">Department:</span> ${data.dept} <br>
                          <span class="fw-bold">Course Number:</span> ${data.courseName} <br>
                          <span class="fw-bold">Course Name:</span> ${data.courseName} <br>
                          <span class="fw-bold">Instructor:</span> ${data.instructor} <br>
                          <span class="fw-bold">Start Date:</span> ${data.startDate} <br>
                          <span class="fw-bold">Number of Days:</span> ${data.numDays}`
}

function deleteBtnClicked(data) {
    fetch(`http://localhost:8081/api/courses/${data.id}`, {
        method: "DELETE"
    })
        .then(response => response.json())
        .then(json => {
            window.location.href = "index.html";
        })
}