<?php

// Function per connessione al DataBase
function connect() {
    $db = "blog";
    $hostname = "localhost:3306";
    $username = "root";
    $password = "";

    //PDO è uno strumento per collegarsi ai DB
    try {
        $pdo = new PDO(                        // Memorizzo la connessione dentro la variabile $pdo
            "mysql:host=$hostname;dbname=$db", //Serve al quale si deve collegare
            $username,                         //Dati di accesso
            $password
        );
    } catch(Exception $e) {                   //Gestione di eventuali errori 
        echo "Errore!";
        var_dump($e);
    }

    return $pdo;                              // Ritorno la variabile $pdo
}