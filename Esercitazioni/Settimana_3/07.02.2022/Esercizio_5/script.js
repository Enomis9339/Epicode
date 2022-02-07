var film = {
    Film_1:{
        Nome: "Il Re Leone",
        Anno: "1994",
        Attori: {
            Attore1: "Attore1",
            Attore2: "Attore2",
            Attore3: "Attore3",
        },
    },
    Film_2:{
        Nome: "Biancaneve e i sette nani",
        Anno: "1937",
        Attori: {
            Attore1: "Attore1",
            Attore2: "Attore2",
            Attore3: "Attore3",
        },   
    },
    Film_3:{
        Nome: "La bella e la bestia",
        Anno: "1991",
        Attori: {
            Attore1: "Attore1",
            Attore2: "Attore2",
            Attore3: "Attore3",
        },
    },
    Film_4:{
        Nome: "La sirenetta",
        Anno: "1989",
        Attori: {
            Attore1: "Attore1",
            Attore2: "Attore2",
            Attore3: "Attore3",
        },
    },
    sayHello : function() {    //Questo è un metodo di un oggetto, cioè una funzionalità 
        return "Ciao a tutti!";
    }
};

//Stampa: tutto l'oggetto - singola proprietà - metodo dell'oggetto
console.log (film, film.Film_1.Nome, film.sayHello());  

