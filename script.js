
// Select Event Handler
const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');
const addsBtn = document.querySelector('#adds-btn');

//To-DO Add On UI 
addsBtn.addEventListener('click', () => {
    if(inputBox.value === ''){
        alert('You must write something!')
    } else{
        let list = document.createElement('li');
        list.innerHTML = inputBox.value;
        listContainer.appendChild(list);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        list.appendChild(span);
    }
    inputBox.value = '';
    saveTask();
})

//Checked , Unchecked & Delete TO-DO 
listContainer.addEventListener('click',(e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    } 
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
    }}, false)

//save data on local storage 
function saveTask(){
    localStorage.setItem('todos', listContainer.innerHTML);
}

function getTask (){
    listContainer.innerHTML = localStorage.getItem('todos');
}

//get task Function call
getTask();
