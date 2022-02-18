//Chiamata Ajax Titoli file audio
$(document)
    .ready(function () {
        $.ajax({
            url: 'assets/json/media.json',
            data: "data",
            dataType: 'json',
            success: function (data) {  //sono tutti i dati i dati che arrivano
                console.log(data);
                $.each(data.audio, function (i, el) {
                    var title = el.title;
                    var file = el.file;
                    $("#musicTitles").append('<li class="list-group-item"><a href="assets/audio/' + file + '" class="btnAudio text-decoration-none text-black">' + title + '</a></li>');

                    $("a.btnAudio").click(function (event) {
                        event.preventDefault();
                        var source = $(this).attr("href");
                        console.log(source);
                        var audioPlayer = document.querySelector("#myaudio");
                        $(audioPlayer).attr("src", source);
                        playAudio();
                    });
                });

            }
        })
    })

function playAudio() {
    var audioPlayer = document.querySelector("#myaudio");
    audioPlayer.play();
};

//Chiamata Ajax per file Titoli e file video

$(document)
    .ready(function () {
        $.ajax({
            url: 'assets/json/media.json',
            data: "data",
            dataType: 'json',
            success: function (data) {
                console.log(data);
                $.each(data.video, function (i, el) {
                    var title = el.title;
                    var file = el.file;
                    $("#videoTitles").append('<li class="list-group-item"><a href="assets/video/' + file + '" class="btnVideo text-decoration-none text-black">' + title + '</a></li>');
                    $("#btnVideo").attr("href", '"assets/video/' + file + '"');

                    $("a.btnVideo").click(function (event) {
                        event.preventDefault();
                        var source = $(this).attr("href"); //specificare this per assicurarsi che vada a selezionare il bottone attivo
                        console.log(source);
                        var videoPlayer = document.querySelector("#myVideo");
                        $(videoPlayer).attr("src", source);
                        playVideo();
                    });
                })
            }
        })
    })

function playVideo() {
    var myVideo = document.querySelector("#myVideo");
    myVideo.play();
};
