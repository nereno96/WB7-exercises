"use strict"

window.onload = function(){
    initCourseTable();
}

function initCourseTable() {
    fetch(`http://localhost:8081/api/courses`)
    .then(response => response.json())
    .then(data => {
        fillTable(data);
    })



}
function fillTable (data) {
    let courseTableBody = document.getElementById("courseTableBody");
    for (let datum of data) {
        let row = courseTableBody.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.innerHTML = datum.dept;
        cell2.innerHTML = datum.courseNum;
        cell3.innerHTML = `<a href="details.html?courseid=${datum.id}">${datum.courseName}</a>`;
    }
}
        let anchor = document.createElement("a");
        anchor.href =`details.html?courseid=${datum.id}`;
        anchor.text = "See details";


