const toDoList = document.getElementById("todolist");
const toDoForm = document.getElementById("todoform");
const toDoInput = document.getElementById("writeagoal");
const overlist = document.getElementById("overlist");
let toDoArr = [];



function saveToDo() {
    localStorage.setItem("goal", JSON.stringify(toDoArr));

    if (toDoArr.length > 10) {
        toDoForm.style.display = "none";
        overlist.style.display = "block";
    } else {
        toDoForm.style.display = "block";
        overlist.style.display = "none";
    }
}

function deleteToDo(event) {
    let parent = event.target.parentElement;

    parent.remove();
    toDoArr = toDoArr.filter((toDoArr) => toDoArr.id !== parseInt(parent.id));

    saveToDo();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;

    const span = document.createElement("span");
    span.innerText = newToDo.text + ``;

    const button = document.createElement("button");
    button.innerText = '🐬';
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}

function submitToDo(event) {
    event.preventDefault();

    const usergoal = toDoInput.value;
    toDoInput.value = "";

    const newToDo = {
        text: usergoal,
        id: Date.now(),
    }

    toDoArr.push(newToDo);
    paintToDo(newToDo);
    saveToDo();
}

const savedToDos = localStorage.getItem("goal");

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDoArr = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

toDoForm.addEventListener("submit", submitToDo);
