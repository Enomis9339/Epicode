//Chiamata Ajax Titoli file audio
$(document)
    .ready(function () {
        $.ajax({
            url: 'assets/json/media.json',
            data: "data",
            dataType: 'json',
            success: function (data) {
                $.each(data.audio, function (i, el) {
                    var title = el.title;
                    var file = el.file;
                    $("#musicTitles").append('<li onclick="playAudio()" class="list-group-item"><a href="assets/audio/' + file + '" class="btnAudio text-decoration-none text-black">' + title + '</a></li>');
                })
            }
        })
    })




function playAudio() {
    var audioPlayer = document.querySelector("#myaudio");
    var source = ("a.btnAudio").attr("href");
    $("a").click(function (event) {
        event.preventDefault();
    });
    audioPlayer.attr("src", source);
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
                    $("#videoTitles").append('<li class="list-group-item"><a href="assets/video/' + file + '" class="btn_video text-decoration-none text-black">' + title + '</a></li>');
                    $("#btnVideo").attr("href", '"assets/video/' + file + '"');
                })
            }
        })
    })

var myVideo = document.querySelector("#myVideo");

function playVideo() {
    myVideo.play();
};
