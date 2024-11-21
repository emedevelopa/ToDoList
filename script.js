const inputText = document.querySelector(".app__input")
const buttonInput = document.querySelector(".app__btn")
const list = document.querySelector(".app__list")

function app () {

    const task = inputText.value

    if(task === "") {
        alert("Please, add a task.")
        return
    }

    let newTask = document.createElement("li")
    newTask.textContent = task
    console.log(task)

    let btnDelete = document.createElement("button")
    btnDelete.textContent = "X"
    btnDelete.classList.add("btnDelete")
    btnDelete.onclick = function(){newTask.remove()}

    newTask.appendChild(btnDelete)

    list.appendChild(newTask)

    inputText.value = " ";
}
