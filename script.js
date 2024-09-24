console.log("welcome to spotify");
let songindex = 0;
let audioelement=new audio('1.mp3');
let masterplay =document.getElementById('masterplay');
let myprogressbar= document.getElementById('myprogressbar');

let song=[
    {songname:"salam-e-ishq",filepath:"song/1.mp3",coverpath:"cover/1.jpg"},
    {songname:"salam-e-ishq",filepath:"song/1.mp3",coverpath:"cover/1.jpg"},
    {songname:"salam-e-ishq",filepath:"song/1.mp3",coverpath:"cover/1.jpg"},
    {songname:"salam-e-ishq",filepath:"song/1.mp3",coverpath:"cover/1.jpg"},
    {songname:"salam-e-ishq",filepath:"song/1.mp3",coverpath:"cover/1.jpg"},
    {songname:"salam-e-ishq",filepath:"song/1.mp3",coverpath:"cover/1.jpg"},
]
//audioelement.play();
//handle play/pause click
masterplay.addEventListener('click',()=>)
if(audioelement.paused || audioelement.currenttime<=0){
    audioelement.play();
}

//listen to events
 myprogressbar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
 })

