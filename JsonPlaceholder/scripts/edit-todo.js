"use script"

window.onload = init;

function init () {
    const getBtn = document.getElementById("getBtn");
    getBtn.onclick = getBtnClicked;
    const updateBtn = document.getElementById("updateBtn");
    updateBtn.onclick = updateBtnClicked;
}

function getBtnClicked () {
    let toDoId = document.getElementById("toDoId");
    fetch(`https://jsonplaceholder.typicode.com/todos/${toDoId.value}`)
    .then(result => result.json())
    .then(data => {
        let userId = document.getElementById("userId");
        userId.value = data.userId;
        let title = document.getElementById("title");
        title.value = data.title;
        let completed = document.getElementById("completed");
        completed.value = data.completed;
        toDoId.disabled = true;})
    .catch(err => {
        messageDiv.innerHTML = "Unexpected error";
    })
}

function updateBtnClicked (){
    const messageDiv = document.getElementById("messageDiv");
    let toDoId = document.getElementById("toDoId").value
    let bodyData = {
        userId: document.getElementById("userId").value,
        title: document.getElementById("title").value,
        completed: document.getElementById("completed").value
    }
    fetch(`https://jsonplaceholder.typicode.com/todos/${toDoId}`, {
        method: "PUT",
        body: bodyData
    })
    .then(response => response.json())
    .then(json => {
        messageDiv.innerHTML = "Student updated";
    })
    .catch(err => {
        messageDiv.innerHTML = "Unexpected error";
    });
}
