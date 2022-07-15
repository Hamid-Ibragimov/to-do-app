const inputEl = document.getElementById("input-el")
const submitEl = document.getElementById("submit-btn")
const clearEl = document.getElementById("clear-btn")
const todoEl = document.getElementById("todo-list")
let taskList = []

render()

function clearListItem(inputVal) {
    document.getElementById(inputVal).remove()
    updateHTML()
}

function taskDone(inputVal) {
    if (document.getElementById(inputVal).getElementsByClassName("list-btns")[0].getElementsByClassName(inputVal+"-done-btn")[0].innerHTML === "Done") {
        document.getElementById(inputVal).getElementsByClassName("list-btns")[0].innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512", class="checkmark"><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/></svg> `                               
        document.getElementById(inputVal).getElementsByClassName("list-btns")[0].getElementsByClassName(inputVal+"-done-btn")[0].innerHTML = "Undone"
        document.getElementById(inputVal).getElementsByClassName("list-btns")[0].getElementsByClassName(inputVal+"-done-btn")[0].style.backgroundColor = "green"
    } else {
        document.getElementById(inputVal).getElementsByClassName("list-btns")[0].getElementsByClassName("checkmark")[0].remove()
        document.getElementById(inputVal).getElementsByClassName("list-btns")[0].getElementsByClassName(inputVal+"-done-btn")[0].innerHTML = "Done"
        document.getElementById(inputVal).getElementsByClassName("list-btns")[0].getElementsByClassName(inputVal+"-done-btn")[0].style.backgroundColor = "buttonface"
    }    
    updateHTML()
}

submitEl.addEventListener("click", function() {
    if (inputEl.value.trim() !== "") {
        const inputVal = inputEl.value
        todoEl.innerHTML += `
                            <li id="${inputVal}">
                                <div class=list-text>
                                    <p>${inputVal}</p>
                                </div>
                                <div class="list-btns">
                                    <button id="${inputVal}-x-btn", onclick="clearListItem(${"'"+inputVal+"'"})">X</button>
                                    <button class="${inputVal}-done-btn", id="done-btn", onclick="taskDone(${"'"+inputVal+"'"})">Done</button>
                                </div>
                            </li>
                            `
        updateHTML()
        inputEl.value = null
    }
})

clearEl.addEventListener("click", function() {
    document.getElementById("todo-list").innerHTML = "" 
    updateHTML()
})

function updateHTML() {
    localStorage.setItem("listHTML",todoEl.innerHTML)
}

function render() {
    todoEl.innerHTML = localStorage.getItem("listHTML")
}