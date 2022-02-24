import { FileDoc } from "./FileDoc.js";
import { UserInterface } from "./UserInterface.js";
//import { app } from "./editor.js";
/*importa le due classi definite negli altri files*/

/*
ui.save = document.querySelector('#save');
console.log(ui.save);
ui.editor = document.querySelector('#editor_txt');
ui.file = document.querySelector('#file_list');
ui.title = document.querySelector('#title_txt');
ui.new = document.querySelector('#new');
*/

export class App {
    /* costruttore: i dati sono presi dal file editor.js che contengono gli id dell'html, che istanzia una nuova app e tramite il costruttore assegna i valori all'istanza di UserInterface  */
    ui = new UserInterface();
    files = [];
    openFile = null;
    idFile = -1;

    constructor(_ui) {
        this.ui = _ui;
        /*inizializza tinymce, passando il riferimento all html tramite la proprietà dell'oggetto*/
        tinymce.init({
            selector: `#${this.ui.editor}`
        });

        this.save = document.querySelector(`#${this.ui.save}`);
        this.title = document.querySelector(`#${this.ui.title}`);
        this.editor = document.querySelector(`#${this.ui.editor}`);
        this.new = document.querySelector(`#${this.ui.new}`);
        this.file = document.querySelector(`#${this.ui.file}`);
        console.log(this.ui.save);
        console.log(this.save);
        // quando nei metodi dovrò usare tinymce.get(this.ui.editor) avrò due metodi .setContent() e .getContent()
        this.saveDoc();
        /*assegnare le proprietà dell'oggetto riferendosi al DOM e passando la proprietà dell'oggetto UserInterface come sopra*/

        /* chiamare il metodo che fa il bind dell'evento click */
        this.btnSave();
        this.btnNew();
        this.buildList();

        /* chiamare il metodo che recupera i dati dal localStorage*/
        //this.loadFile(el);
    }
    /* metodo che fa il bind sul click, attenzione all'uso di this*/
    btnSave() {
        this.save.addEventListener("click", this.saveDoc.bind(this));
    }


    btnNew() {
        this.new.addEventListener("click", this.newDoc.bind(this));
    }


    /* metodo che recupera i dati nel localStorage*/


    /* metodo che carica l'oggetto file */
    loadFile(el) {
        this.idFile = el.target.dataset.id;
        this.openFile = new FileDoc(this.files[this.idFile].title, this.files[this.idFile].text);
        this.title.value = this.openFile.title;
        tinymce.get(this.ui.editor).setContent(this.openFile.text);
        console.log(this.idFile);
    }

    /* metodo che ripulisce */
    clearInput() {
        this.title.value = '';
    }


    /* altro metodo: se non ci sono file caricati crea un oggetto file e fa il push nell'array */
    saveDoc() {
        if (this.openFile == null) {
            let file = new FileDoc();
            file.title = this.title.value; // salva il titolo
            file.text = tinymce.get(this.ui.editor).getContent(); // 
            this.files.push(file);
            /* salva l'array nel localStorage e chiama la funzione che stampa a video*/
            localStorage.setItem('files', this.files);
            this.buildList();
        } else { /* altrimenti modifica il file assegnando i valori letti dal form*/
            this.openFile.title = this.title.value;
            this.openFile.text = tinymce.get(this.ui.editor).getContent();
            this.files[this.idFile] = this.openFile;
        }
        console.log(this.files);
    }


    /* metodo che stampa a video */
    buildList() {
        var list = "";
        for (let i = 0; i < this.files.length; i++) {
            list += `<li class="list-group-item" data-id="${i}"> ${this.files[i].title} </li>`;
        }
        document.querySelector('#file_list').innerHTML = list;
        this.clearInput();
        this.newDoc();
    }

    /* metodo che svuota il form */
    newDoc() {
        this.title.value = "";
        tinymce.get(this.ui.editor).setContent(''); //svuoto il contenuto dell'editor
    }
}