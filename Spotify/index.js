console.log("Welcome");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myprogressBar =document.getElementById('myprogressBar');
let gif =document.getElementById('gif');
masterSongName =document.getElementById('masterSongName');
let songItems =Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {songName : "Coffee For your Head", filePath: "songs/1.mp3" , coverPath : "images/1.jpg"},
    {songName : "Hall Of Fame", filePath: "songs/2.mp3" , coverPath : "images/2.jpg"},
    {songName : "Till I collapse", filePath: "songs/3.mp3" , coverPath : "images/3.jpg"},
    {songName : "Believer - Imagine Dragons", filePath: "songs/4.mp3" , coverPath : "images/4.jpg"},
    {songName : "Vacation", filePath: "songs/5.mp3" , coverPath : "images/5.jpg"},
    {songName : "Rasputin", filePath: "songs/6.mp3" , coverPath : "images/6.jpg"},
    {songName : "BoomBastic - Shaggy", filePath: "songs/7.mp3" , coverPath : "images/7.jpg"},
    {songName : "Struggle - Ap dhillon", filePath: "songs/8.mp3" , coverPath : "images/8.jpg"},
    {songName : "Spaceship - Ap dhillon", filePath: "songs/9.mp3" , coverPath : "images/9.jpg"},
    {songName : "Lose yourself - Eminem", filePath: "songs/10.mp3" , coverPath : "images/10.jpg"},
]

songItems.forEach((element,i) => {
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        masterSongName.innerText = songs[songIndex].songName;
     audioElement.play();
     masterPlay.classList.remove("fa-circle-play");
     masterPlay.classList.add("fa-circle-pause");
     gif.style.opacity = 1;
    }
    else if(audioElement.play || audioElement.currentTime >=0){
     audioElement.pause();
     masterPlay.classList.remove("fa-circle-pause");
     masterPlay.classList.add("fa-circle-play");
     gif.style.opacity = 0;
    }

});

audioElement.addEventListener("timeupdate" , ()=> {
    progress = parseInt(audioElement.currentTime/audioElement.duration * 100);
    myprogressBar.value = progress;
})

myprogressBar.addEventListener("change" , ()=>{
    audioElement.currentTime = myprogressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        masterPlay.classList.remove("fa-circle-play");
     masterPlay.classList.add("fa-circle-pause");
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 1
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=1){
        songIndex = 1
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})