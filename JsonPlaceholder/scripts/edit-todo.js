"use script"

window.onload = init;

function init () {
    const addBtn = document.getElementById("addBtn");
    addBtn.onclick = addBtnClicked;
}

function addBtnClicked () {
    const messageDiv = document.getElementById("messageDiv");
    let toDoId = document.getElementById("toDoId").value;
    fetch(`https://jsonplaceholder.typicode.com/todos/${toDoId}`)
    .then(result => result.json())
    .then(data => {
        let userId = document.getElementById("userId").value;
        userId = data.userId;
        let title = document.getElementById("title").value;
        title = data.title;
        let completed = document.getElementById("completed").value;
        completed = data.title;
    let bodyData = {
        
    }})
    .catch(err => {
        messageDiv.innerHTML = "Unexpected error";
    })
}

