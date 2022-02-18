// Bastava una sola chiamata Ajax invece che una per gli audio e l'altra per i video 
$(document)
    .ready(function () {
        $.ajax({
            url: 'assets/json/media.json',
            data: "data",
            dataType: 'json',
            success: function (data) {  //sono tutti i dati i dati che arrivano
                console.log(data);

                //Ciclo each per le tracce audio
                $.each(data.audio, function (i, el) {
                    var title = el.title;
                    var file = el.file;
                    $("#musicTitles").append('<li class="list-group-item"><a href="assets/audio/' + file + '" class="btnAudio text-decoration-none text-black">' + title + '</a></li>');
                });

                //Ciclo each per le tracce video
                $.each(data.video, function (i, el) {
                    var title = el.title;
                    var file = el.file;
                    $("#videoTitles").append('<li class="list-group-item"><a href="assets/video/' + file + '" class="btnVideo text-decoration-none text-black">' + title + '</a></li>');
                    $("#btnVideo").attr("href", '"assets/video/' + file + '"');
                });

                //il GET href e SET href vanno all'interno della funzione click del mouse non all'interno del ciclo each !
                $("a.btnAudio").click(function (event) {  //Al click del mouse sul link della canzone specifico una funzione 
                    event.preventDefault();               //con preventDefault(), evito che il link mi rimandi ad un'altra pagina 
                    var source = $(this).attr("href");    //**Specificando this, dico che deve prendere l'attributo dello specifico bottone su cui clicco ! **/
                    console.log(source);
                    var audioPlayer = document.querySelector("#myaudio");
                    $(audioPlayer).attr("src", source);
                    playAudio();
                });

                $("a.btnVideo").click(function (event) {
                    event.preventDefault();
                    var source = $(this).attr("href"); //specificare this per assicurarsi che vada a selezionare il bottone attivo
                    console.log(source);
                    var videoPlayer = document.querySelector("#myVideo");
                    $(videoPlayer).attr("src", source);
                    playVideo();
                });
            }
        })
    })

function playAudio() {
    var audioPlayer = document.querySelector("#myaudio"); //** Potevi usare il metoodo .play alla riga 43 senza creare una funzione esterna da poi richiamare **//
    audioPlayer.play();
};

function playVideo() {
    var myVideo = document.querySelector("#myVideo");
    myVideo.play();
};