const frmInput = document.getElementById('frmInput');
const taskInput = document.getElementById('taskInput');
const btnSubmit = document.getElementById('btnSubmit');
const listArea = document.getElementById('listArea');
const listTask = document.getElementById('listTask');
const noTask = document.getElementById('noTask');
const myTaskList = [];
const myStates = [];

// ----------------------------------------------------------------
btnSubmit.addEventListener('click', function (e) {
  e.preventDefault();

  if (taskInput.value !== '' && taskInput.value !== ' ') {
    myTaskList.push(taskInput.value);
    myStates.push('unDone');
    printTasks();
    console.log(myTaskList);

    frmInput.reset();
  }
});

function printTasks() {
  if (myTaskList.length === 0) {
    noTask.setAttribute('class', '');
  } else if (myTaskList.length > 0) {
    noTask.setAttribute('class', 'hidden');
  }

  listTask.innerHTML = '';
  for (let i = 0; i < myTaskList.length; i++) {
    createLi(myTaskList[i], i);
  }
}

function createLi(str, index) {
  const myLi = document.createElement('li');
  const mySpan = document.createElement('span');
  const myButton = document.createElement('button');
  const myI = document.createElement('i');

  mySpan.innerText = str;
  mySpan.setAttribute('onclick', `setState(${index})`);

  myI.setAttribute('class', 'bx');
  myI.classList.add('bxs-trash-alt');
  myButton.appendChild(myI);
  myButton.setAttribute('onclick', `deleteTask(${index})`);

  myLi.appendChild(mySpan);
  myLi.appendChild(myButton);
  myLi.setAttribute('class', `${myStates[index]}`);

  listTask.appendChild(myLi);
}

function deleteTask(index) {
  myTaskList.splice(index, 1);
  myStates.splice(index, 1);

  console.log(myTaskList);

  printTasks();
}

function setState(index) {
  const myLi = document.querySelector(`#listTask li:nth-child(${index + 1})`);

  console.log(myLi);
  if (myLi.classList.contains('unDone')) {
    myLi.classList.remove('unDone');
    myLi.classList.add('done');
    myStates[index] = 'done';
  } else if (myLi.classList.contains('done')) {
    myLi.classList.remove('done');
    myLi.classList.add('unDone');
    myStates[index] = 'unDone';
  }
}
