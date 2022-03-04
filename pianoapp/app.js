const [a,b,c,d,e,f,h,k,l] = document.querySelectorAll('.key')
const datarequired = document.querySelectorAll('audio')
var audio = new Audio()
a.addEventListener('click', (e)=>{
    e.preventDefault()
    audio.src = datarequired[0].src
    audio.play()
})
b.addEventListener('click', (e)=>{
    e.preventDefault()
    audio.src = datarequired[1].src
    audio.play()
})
c.addEventListener('click', (e)=>{
    e.preventDefault()
    audio.src = datarequired[2].src
    audio.play()
})
d.addEventListener('click', (e)=>{
    e.preventDefault()
    audio.src = datarequired[3].src
    audio.play()
})
e.addEventListener('click', (e)=>{
    e.preventDefault()
    audio.src = datarequired[4].src
    audio.play()
})
f.addEventListener('click', (e)=>{
    e.preventDefault()
    audio.src = datarequired[5].src
    audio.play()
})
h.addEventListener('click', (e)=>{
    e.preventDefault()
    audio.src = datarequired[6].src
    audio.play()
})
k.addEventListener('click', (e)=>{
    e.preventDefault()
    audio.src = datarequired[7].src
    audio.play()
})
l.addEventListener('click', (e)=>{
    e.preventDefault()
    audio.src = datarequired[8].src
    audio.play()
})
  