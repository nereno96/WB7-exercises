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
    })
}
};




function showCourseInfo (data) {
    let courseInfoPara = document.getElementById("courseInfoPara");
    courseInfoPara.innerHTML = `The ${data.courseName} course (${data.dept} ${data.courseNum}) is taught by ${data.instructor}. It's start date is ${data.startDate} and the course is ${data.numDays} days long.`
}