const music = new Audio('audio/1.mp3');
const songs=[
    {
        id:1,
        songName:`You And Me
        <div class="subtitle">Shubh</div>`,
        poster:"img/1.jpeg"
    },
    {
        id:2,
        songName:`Raatan Kaaliyan
        <div class="subtitle">Laddi Chahal</div>`,
        poster:"img/2.jpeg"
    },
    {
        id:3,
        songName:`Insane
        <div class="subtitle">AP Dhillon</div>`,
        poster:"img/3.jpeg"
    },
    {
        id:4,
        songName:`Summer High
        <div class="subtitle">AP Dhillon</div>`,
        poster:"img/4.jpeg"
    },
    {
        id:5,
        songName:`Athra Style
        <div class="subtitle">Sidhu Moose Wala</div>`,
        poster:"img/5.jpeg"
    },
    {
        id:6,
        songName:`Udaarian
        <div class="subtitle">Satinder Sartaaj</div>`,
        poster:"img/6.jpeg"
    },
    {
        id:7,
        songName:`Jab Koi Baat 
        <div class="subtitle">Shirley Setia</div>`,
        poster:"img/7.jpeg"
    },
    {
        id:8,
        songName:`Teriyaan Deedaan
        <div class="subtitle">Prabh Gill</div>`,
        poster:"img/8.jpeg"
    },
    {
        id:9,
        songName:`Goat
        <div class="subtitle">Sidhu Moose Wala</div>`,
        poster:"img/9.jpeg"
    },
    {
        id:10,
        songName:`Case
        <div class="subtitle">Diljit Dosanjh</div>`,
        poster:"img/10.jpeg"
    },
    {
        id:11,
        songName:`Tu Hi Das De
        <div class="subtitle">Simar Panag</div>`,
        poster:"img/11.jpeg"
    },
    {
        id:12,
        songName:`Sarkar
        <div class="subtitle">Jaura Phagwara</div>`,
        poster:"img/12.jpeg"
    },
    {
        id:13,
        songName:`Vaaste
        <div class="subtitle">Dhvani Bhanushali</div>`,
        poster:"img/13.jpeg"
    },
    {
        id:14,
        songName:`Hass Hass
        <div class="subtitle">Diljit Dosanjh</div>`,
        poster:"img/14.jpeg"
    },
    {
        id:15,
        songName:`Gaani
        <div class="subtitle">AP Dhillon</div>`,
        poster:"img/15.jpeg"
    },
    {
        id:16,
        songName:`Aukaat
        <div class="subtitle">Jassi Gill</div>`,
        poster:"img/16.jpeg"
    },
    {
        id:17,
        songName:`King Shit
        <div class="subtitle">Shubh</div>`,
        poster:"img/17.jpeg"
    },
    {
        id:18,
        songName:`Farming
        <div class="subtitle">Laddi Chahal</div>`,
        poster:"img/18.jpeg"
    },
    {
        id:19,
        songName:`Deewane Hum Nahi Hote
        <div class="subtitle">Sidhu Moose Wala</div>`,
        poster:"img/19.jpeg"
    },
]

Array.from(document.getElementsByClassName('songitem')).forEach((e, i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let masterPlay=document.getElementById('masterPlay');
let wave=document.getElementById('wave');
masterPlay = addEventListener('click', ()=>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
    } else {
        music.pause();
        wave.classList.remove('active1');
    }
})


let index=0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playlistPaly')).forEach((e) =>{
    e.addEventListener('click',(el)=>{
        index = el.target.id;
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpeg`;
        music.play()

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
        })
    })
})

let currentstart = document.getElementById('currentstart');
let currentend = document.getElementById('currentend');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=> {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    
    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur%60);
    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentend.innerHTML = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr%60);
    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
    currentstart.innerHTML = `0${min2}:${sec2}`;

    let progressBar = parseInt((music_curr/music_dur)*100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})
seek.addEventListener('change', ()=>{
    music.currentTime = seek.value*music.duration / 100;
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})

let back = document.getElementById('back');
let next = document.getElementById('next');
back.addEventListener('click', ()=> {
    index -= 1;
    if(index < 1){
        index=Array.from(document.getElementsByClassName('songitem')).length;
    }
    music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpeg`;
        music.play()
        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
        })
})

next.addEventListener('click', ()=> {
    index += 1;
    if(index > Array.from(document.getElementsByClassName('songitem')).length){
        index=1;
    }
    music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpeg`;
        music.play()
        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
        })
})

let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop_song=document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () =>{
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click', () =>{
    pop_song.scrollLeft -= 330;
})

let pop_art_left=document.getElementById('pop_art_left');
let pop_art_right=document.getElementById('pop_art_right');
let item=document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', () =>{
    item.scrollLeft += 330;
})
pop_art_left.addEventListener('click', () =>{
    item.scrollLeft -= 330;
})