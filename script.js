/* import checkClick from './modules/Func.js';
import addTask from './modules/Func.js';
import deleteTask from './modules/Func.js'; 
import returnTask from './modules/Func.js'; */

/* ищем кнопки */

const checkboxes = document.getElementsByName('check');
const addButtons= document.getElementsByClassName('addImg');
const deleteButtons = document.getElementsByClassName('deleteTaskImg');
const returnButtons = document.getElementsByClassName('returnTaskImg');
/* console.log(checkboxes); */


/* Добавляем обработчики события */
for (let i=0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', checkClick);
}
for (let i=0; i < addButtons.length; i++) {
    addButtons[i].addEventListener('click', addTask);
}
for (let i=0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', deleteTask);
}
for (let i=0; i < returnButtons.length; i++) {
    returnButtons[i].addEventListener('click', returnTask);
}

/* Функции */

 function checkClick(event) {
    /* console.log(alert('thanks')); */
    let elem = event.currentTarget;
    let targetDiv = document.getElementById('doneTasks');
    let elemDiv = elem.parentNode;
    targetDiv.append(elemDiv);
    elemDiv.classList.add('taskDone');
    elemDiv.lastElementChild.outerHTML = '<img src="img/return.png" alt="" class="returnTaskImg">';

}

function addTask(event) {
    let elem = event.currentTarget;
    if (elem.parentNode.id ="lowPriority") {
        let val = document.getElementById('inputLow').value;
        let newTask = divLow.cloneNode(true);
        newTask.firstElementChild.nextElementSibling.innerHTML = val;
        let targetDiv = document.getElementById('lowPriority');
        targetDiv.append(newTask);
        document.getElementById('inputLow').value = "";
    } if (elem.parentNode.id ="HighPriority") {
        let val = document.getElementById('inputHigh').value;
        let newTask = divHigh.cloneNode(true);
        newTask.firstElementChild.nextElementSibling.innerHTML = val;
        let targetDiv = document.getElementById('HighPriority');
        targetDiv.append(newTask);
        document.getElementById('inputHigh').value = "";
    }
}

function deleteTask(event) {
    let elem = event.currentTarget;
    let elemDiv = elem.parentNode;
    elemDiv.remove();
}

function returnTask(event) {
    let elem = event.currentTarget;
    let elemDiv = elem.parentNode;
    let priority = confirm('Я добавлю эту задачу в "Важные"?','');
    switch (priority) {
        case true:
    
        let targetDiv1 = document.getElementById('HighPriority');
        targetDiv1.append(elemDiv);
        elemDiv.classList.remove('taskDone');
        elemDiv.classList.add('task');
        elemDiv.classList.add('high');
        elemDiv.firstElementChild.checked = false;
        elemDiv.lastElementChild.outerHTML = '<img src="img/delete.png" alt="" class="returnTaskImg">';

        break;

        case false:
        let targetDiv2 = document.getElementById('lowPriority');
        targetDiv2.append(elemDiv);
        elemDiv.classList.remove('taskDone');
        elemDiv.classList.add('task');
        elemDiv.classList.add('low');
        elemDiv.firstElementChild.checked = false;
        elemDiv.lastElementChild.outerHTML = '<img src="img/delete.png" alt="" class="returnTaskImg">';

        break;

    }

}

