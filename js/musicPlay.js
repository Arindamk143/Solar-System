let music = document.querySelector("audio")
let img = document.querySelector("img")
img.addEventListener("click",()=>{
    return music.paused ? music.play() : music.pause()
})