
var samira = document.getElementById('samira');
var obstacle1 = document.getElementById('obstacle1');
var obstacle2 = document.getElementById('obstacle2');
var obstacle3 = document.getElementById('obstacle3');
var counter = 0;
var highestScore = 0;

function changeHighScore() {
    var score = Math.floor(counter / 100);
    if (score > highestScore) {
        highestScore = score;
        document.getElementById("higestScore").innerText = highestScore;
    }
}


function jump() {
    if (samira.classList === "execute") {
        return
    }
    samira.classList.add("execute");

    setTimeout(function() {
        samira.classList.remove("execute");

    }, 650)
};



$(".game").click(jump);

var gameOver = setInterval(function() {
        let samiraTop = parseInt(window.getComputedStyle(samira).getPropertyValue("top"));
        let obstacle1Left = parseInt(window.getComputedStyle(obstacle1).getPropertyValue("left"));
        let obstacle2Left = parseInt(window.getComputedStyle(obstacle2).getPropertyValue("left"));
        let obstacle3Left = parseInt(window.getComputedStyle(obstacle3).getPropertyValue("left"));

        if (obstacle1Left < 170 && obstacle1Left > 135.6 && samiraTop >= 400 || obstacle2Left < 170 && obstacle2Left > 135.6 && samiraTop >= 400 || obstacle3Left < 170 && obstacle3Left > 135.6 && samiraTop >= 400) {
            obstacle1.style.animation = "none";
            obstacle2.style.animation = "none";
            obstacle3.style.animation = "none";

            swal({
                title: "Game Over!",
                text: "Your score is " + Math.floor(counter / 100),
                button: "Restart",
            });

            var snd = new Audio('alert.mp3');
            snd.play();
            //alert("Game Over. score: " + Math.floor(counter / 100));
            changeHighScore();

            counter = 0;
            obstacle1.style.animation = "run 5s infinite linear";
            obstacle2.style.animation = "run 8s infinite linear";
            obstacle3.style.animation = "run 11s infinite linear";

        } else {

            counter++;
            document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);

        }
    },
    10);

document.addEventListener('keyup', function(e) {
    if (e.keyCode === 32 || e.keyCode === 38) {
        var snd2 = new Audio('jump.mp3');
        snd2.play();
        jump()
    }
});

$(document).ready(function() {

    const backChoice = {
        initial: {
            //nightMode
            "background": 'linear-gradient(to top, white 0%, #0f0a4a 100%)',
            "background-image": "url(/images/pic2.png)",
            'background-color': '#7dbadb',

        },
        second: {
            //dayMode
            "background": 'linear-gradient(to top, #FFBAC3 0%, #C5C1FF 56%, #2CD8D5 100%)',
            "background-image": "url(/images/pic1.png)",
            'background-color': '#0e0a40',

        }
    }
    var state = backChoice.initial;

    $("#button").click(function() {

        if (state === backChoice.initial) {
            console.log("in the main if")
            $('header').css('background-color', backChoice.second["background-color"])
            $('#mainnav').css('background-color', backChoice.second["background-color"])
            $('.game').css("background-image", backChoice.second["background-image"])
            $('body').css('background', backChoice.initial["background"]);
            state = backChoice.second;
            //
        } else {
            console.log("in the else")
            $('header').css('background-color', backChoice.initial["background-color"]);
            $('#mainnav').css('background-color', backChoice.initial["background-color"]);
            $('.game').css("background-image", backChoice.initial["background-image"]);

            $('body').css('background', backChoice.second["background"]);
            state = backChoice.initial;
        }
    });


    // JQUERY NAV TOGGLE
    $('#menu').bind('click', function(event) {
        $('#mainnav ul').slideToggle();
    });

    $(window).resize(function() {
        var w = $(window).width();
        if (w > 768) {
            $('#mainnav ul').removeAttr('style');
        }
    });


var samira = document.getElementById('samira');
var obstacle1 = document.getElementById('obstacle1');
var obstacle2 = document.getElementById('obstacle2');
var obstacle3 = document.getElementById('obstacle3');
var counter = 0;
var highestScore = 0;

function changeHighScore() {
    var score = Math.floor(counter / 100);
    if (score > highestScore) {
        highestScore = score;
        document.getElementById("higestScore").innerText = highestScore;
    }
}


function jump() {
    if (samira.classList === "execute") {
        return
    }
    samira.classList.add("execute");

    setTimeout(function() {
        samira.classList.remove("execute");

    }, 650)
};



$(".game").click(jump);

var checkDead = setInterval(function() {
    let samiraTop = parseInt(window.getComputedStyle(samira).getPropertyValue("top"));
    let obstacle1Left = parseInt(window.getComputedStyle(obstacle1).getPropertyValue("left"));
    let obstacle2Left = parseInt(window.getComputedStyle(obstacle2).getPropertyValue("left"));
    let obstacle3Left = parseInt(window.getComputedStyle(obstacle3).getPropertyValue("left"));

    if (obstacle1Left < 170 && obstacle1Left > 135.6 && samiraTop >= 400 || obstacle2Left < 170 && obstacle2Left > 135.6 && samiraTop >= 400 || obstacle3Left < 170 && obstacle3Left > 135.6 && samiraTop >= 400) {
        obstacle1.style.animation = "none";
        obstacle2.style.animation = "none";
        obstacle3.style.animation = "none";
        alert("Game Over. score: " + Math.floor(counter / 100));
        changeHighScore();
        counter = 0;
        obstacle1.style.animation = "run 5s infinite linear";
        obstacle2.style.animation = "run 8s infinite linear";
        obstacle3.style.animation = "run 9s infinite linear";
        console.log(highestScore)
    } else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);

    }
}, 10);


$(document).ready(function() {
    // $("#button").click(function() {

    //     $('header').css('background-color', '#7dbadb');
    //     $('#mainnav').css('background-color', '#7dbadb');
    //     $('.game').css("background-image", "url(pic2.png)");
    //     $('body').css('background-image', 'linear-gradient(to top, #FFBAC3 0%, #88e3fc 100%)');
    // });


    const backChoice = {
        initial: {
            //nightMode
            "background": 'linear-gradient(to top, #FFBAC3 0%, #88e3fc 100%)',
            "background-image": "url(/images/pic2.png)",
            'background-color': '#7dbadb',

        },
        second: {
            //dayMode
            "background": 'linear-gradient(to top, #FFBAC3 0%, #C5C1FF 56%, #2CD8D5 100%)',
            "background-image": "url(/images/pic1.png)",
            'background-color': '#0e0a40',

        }
    }
    var state = backChoice.initial

    $("#button").click(function() {
        if (state === backChoice.initial) {
            $('header').css('background-color', backChoice.second["background-color"])
            $('#mainnav').css('background-color', backChoice.second["background-color"])
            $('.game').css("background-image", backChoice.second["background-image"])
            $('body').css('background-image', backChoice.second["background"]);
            state = backChoice.second;

        } else {
            $('header').css('background-color', backChoice.initial["background-color"]);
            $('#mainnav').css('background-color', backChoice.initial["background-color"]);
            $('.game').css("background-image", backChoice.initial["background-image"]);
            $('body').css('background-image', backChoice.initial["background"]);
            state = backChoice.initial;
        }
    });
    $(document).ready(function() {

        // JQUERY NAV TOGGLE
        $('#menu').bind('click', function(event) {
            $('#mainnav ul').slideToggle();
        });

        $(window).resize(function() {
            var w = $(window).width();
            if (w > 768) {
                $('#mainnav ul').removeAttr('style');
            }
        });

    });

});