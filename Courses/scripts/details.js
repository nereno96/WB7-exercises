"use strict";

window.onload = function () {
    const urlParams = new URLSearchParams(location.search);
};

let id = -1;
if (urlParams.has("courseid") === true) {
    id = urlParams.get("courseid");
    fetch(`http://localhost:8081pi/courses/${id}`)
    .then(response => response.json())
    .then(data => {

    })
    // Now that you know the course id, make an
    // AJAX call to get that one course
    // and in the callback, display it.
    // Hint: you can create the URL you need for
    // the ajax request by concatenating
    // "http://localhost:8081pi/courses/" with the id!
}


function showCourseInfo (data) {
    
}