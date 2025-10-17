const ad = document.querySelector('.song');
const play = document.querySelector('.fa-play');
const pauses = document.querySelector('.fa-pause');
const forward = document.querySelector('.fa-forward-step');
const title = document.querySelector('.title');
const art_img = document.querySelector('.art-img');
const art_name = document.querySelector('.name');
const playSong = document.querySelector('.playsong');

const artist_name = ['Adele', 'Taylor Swift', 'Ed Sheeran', 'Dua Lipa', 'Drake'];
const song_title = ['Easy On Me', 'Anti-Hero', 'Shivers', 'Levitating', 'Jimmy Cooks'];
const song_img = ['adele.jpg', 'taylor.jpg', 'ed.jpg', 'dua.jpg', 'drake.jpg'];
const songs = ['Adele - Easy On Me.mp3', 'Taylor Swift - Anti-Hero.mp3', 'Ed Sheeran - Shivers.mp3', 'Dua Lipa - Levitating.mp3', 'Drake - Jimmy Cooks.mp3'];

playSong.addEventListener('click', effect);

function effect() {

    if (ad.duration == ad.currentTime) {
        x += 1;
        console.log(x);
    }

    if ((!playing.classList.contains('none'))) {
        ad.play();
        setInterval(prog,1000);
        setInterval(line,1000);
        progres.addEventListener('click',(e) => {
          var widthbar2 = (e.offsetX / e.target.clientWidth) * ad.duration;
          ad.currentTime = widthbar2;   
       })
    } else {
        ad.pause();
    }

    title.classList.toggle('run');
    playing.classList.toggle('none');
    pauses.classList.toggle('none');
    art_img.classList.toggle('round');
    dur();

}

function removeEffect() {
    ad.pause();
    ad.currentTime = 0.01;
    ttl.classList.remove('run');
    playing.classList.remove('none');
    pauses.classList.add('none');
    art_img.classList.remove('round');
}

var x = 0;

function backward () {
    dur();
    x -=1;
    removeEffect();
    songs(x);
    if (x < 0) {
        x = artist.length - 1;
    }
}

function forward() {
    dur();
    x += 1;
    removeEffect();
    songs(x);
    if (x > artist.length - 1) {
        x = -1;
    } 
}

function songs(x) {
    art_name.innerHTML = artist_name[x];
    title.innerHTML = song_title[x];
    art_img.src = "./image/ar${x}.jpeg";
    ad.src = "./songs/s${x}.mp3";
}

songs (0);

const progres = document.querySelector('.line');
const lines = document.querySelector('.lineChild');
const strt = document.querySelector('#start');
const end = document.querySelector('#end');

function dur() {
    var dura = ad.duration;
    var secdu = Math.floor(dura % 60);
    var mindu = Math.floor(dura / 60);
    if (secdu < 10) {
        secdu = "0" + secdu;
    }
    end.innerHTML = '${mindu} : ${secdu}';
}

function prog() {
    var cur = ad.currentTime;
    var sec = Math.floor(cur % 60);
    var min = Math.floor(cur / 60);

    if (sec < 10) {
        sec = "0" + sec;
    }
    strt.innerHTML = '${min} : ${sec}';

}

function line() {
    var widthbar = (ad.currentTime/ ad.duration) * 100;
    lines.style.width = '${widthbar}';

}

