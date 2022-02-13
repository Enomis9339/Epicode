var addBtn;                                                     //Dichiaro il bottone di aggiunta task 
var delBtn;
var taskInput;                                                  //Dichiaro la variabile dell'input un cui scrivo la tasks
var taskListHTML;                                               //Dichiaro la variabile della lista che ho nell'HTML (Ul) /
var taskList = [];                                              //Array vuoto che popolerò con le tasks     

window.addEventListener("load", init);

function init() {
    addBtn = document.querySelector("#add_btn");
    taskListHTML = document.querySelector("#unordered-list");
    taskInput = document.querySelector(".form-control");
    addBtn.addEventListener("click", addTask);                 //Metto in ascolto il bottone in attesa di un evento click e avvio la function AddTask
}

//Pusho le informazioni all'interno dell'array TaskList
function addTask() {                                           //Pusho le task nell'array vuoto TaskList
    if (taskInput.value.length > 0) {
        taskList.push(taskInput.value);
    } else {
        alert("Per proseguire scrivi prima un task");
    }
    buildList();
    save();
    clearForms();
}



//Funzione che stampa a vista le mie tasks scritte nell'input
function buildList() {
    var list = "";                                              //inserisco nell'array vuoto tasklist il valore scritto nell'input
    for (var i = 0; i < taskList.length; i++) {
        list += '<li id="del_btn" class="list-group-item d-flex justify-content-between align-items-center">' + taskList[i] + '<button onclick="removeTask(' + i + ')" class="badge badge-primary badge-pill bg-danger">X</button></li>';
    }
    taskListHTML.innerHTML = list;                               //Stampo la lista in HTML all'interno di Ul
    clearForms();
}

function clearForms() {
    taskInput.value = ""; // Ripulisce il campo di input
}


/// SEZIONE DI REGISTRAZIONE, CONTROLLO E CANCELLAZIONE DATI NEL LOCAL STORAGE


function save() {                                            //Salva i dati in storage e li stampa negli elementi lista
    //taskList = taskInput.value;                               //richiamo il campo di input testo
    localStorage.setItem('tasks', taskList);                  //salvo l'oggetto nel localStorage  //tasksList.splice(i, 1);
}


function removeTask(taskId) {
    taskList.splice(taskId, 1);
    save();
    buildList();
}

function check() {                                             //controlla che ci sia qualcosa nel localStorage con la key
    if (localStorage.getItem('tasks')) {                       //getitem- restituisce l'elemento ('nome della chiave')
        taskList = localStorage.getItem('tasks').split(",");
    }
    buildList();
}
