"use script"

window.onload = init;

function init () {
    const addBtn = document.getElementById("addBtn");
    addBtn.onclick = addBtnClicked;
}

function addBtnClicked () {
    const messageDiv = document.getElementById("messageDiv");
    let bodyData = {
        userId: document.getElementById("userId").value,
        title: document.getElementById("title").value,
        completed: document.getElementById("completed").value
    }
    fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: bodyData
    })
    .then(result => result.json())
    .then(data => {
        messageDiv.innerHTML = `Student ${data.id} added`})
    .catch(err => {
        messageDiv.innerHTML = "Unexpected error";
    })
}