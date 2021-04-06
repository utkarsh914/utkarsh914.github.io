alert("Open anything only after page has been loaded fully!");
alert("Open anything only after page has been loaded fully!");
function gohome() {
    var x = document.getElementsByClassName("closable");
    var i;
    for (i=0; i < 6; i++){
        x[i].style.display = 'none';
    }
}

function poweroffandon(){
    gohome();
    var displayClass = document.getElementById('phone-display').className;

    if(displayClass == "phone-display-on"){
        //document.getElementById("phone-display").classList.add('phone-display-off');
        //document.getElementById("phone-display").classList.remove('phone-display-on');
        document.getElementById('phone-display').className = "phone-display-off";
    }
    else if(displayClass == "phone-display-off"){
        document.getElementById('phone-display').className = "phone-display-on";
        //document.getElementById("phone-display").classList.add('phone-display-on');
        //document.getElementById("phone-display").classList.remove('phone-display-off');
    } 
}


//MUSIC PLAYER

var songs = ["songs/Pretty-Girl.mp3","songs/Faded.mp3","songs/Cheap-Thrills.mp3"];
var poster = ["posters/Pretty-Girl.jpeg","posters/Faded.jpg","posters/Cheap-Thrills.jpg"];
        
var songTitle = document.getElementById("songTitle");
var fillBar = document.getElementById("fill");

var song = new Audio();
var currentSong = 0;    //points to the current song
        
window.onload = playSong;   //call the function playSong when window is load

function playSong(){
            
    song.src = songs[currentSong];  //set the source of 0th song         
    $("#bg img").attr("src",poster[currentSong]);
    songTitle.textContent = songs[currentSong]; // set the title of song
    song.play();    // play the song
}
        
function playOrPauseSong(){
    
    if(song.paused){
        song.play();
        $("#play img").attr("src","icons/Pause.png");
    }
    else{
        song.pause();
        $("#play img").attr("src","icons/Play.png");
    }
}
        
song.addEventListener('timeupdate',function(){

    var position = song.currentTime / song.duration;        
    fillBar.style.width = position * 100 +'%';
});
        
    
function next(){

    currentSong++;
    if(currentSong > 2){
        currentSong = 0;
    }
    playSong();
    
    $("#play img").attr("src","icons/Pause.png");
    $("#bg img").attr("src",poster[currentSong]);
        }
    
function pre(){
            
    currentSong--;
    if(currentSong < 0){
        currentSong = 2;
    }
    playSong();
    $("#play img").attr("src","icons/Pause.png");
    $("#bg img").attr("src",poster[currentSong]);
}