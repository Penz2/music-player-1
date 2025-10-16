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

function effect() {

    if(ad.duration == ad.currentTime) {
        x += 1;
        console.log(x);
    }

    if((!playing.classList.contains('none'))){
        ad.play();
        setInterval(ProgressEvent,1000);
        setInterval(line,1000);
        Progress.addEventListener('click',(e)=>{
            var widthbar2 = (e.offsetX /e.target.clientWidth) * ad.duration;
            ad.currentTime = widthbar2;   
        });
    }
    else{
        ad.pause();
    }

    title.classList.toggle('run');
    play.classList.toggle('none');
    pauses.classList.toggle('none');
    art_img.classList.toggle('round');
    
}

