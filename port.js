const ham = document.querySelector('.respNav')
const list = document.querySelector('.navlist')

const butt = document.querySelector('#LtoD')
const ball = document.querySelector('.ball')
const bod = document.querySelector('body')
const dod = document.querySelector('.aOne')
const nop = document.querySelector('.aTwo')
const fod = document.querySelector('.aThree')
const proj = document.querySelector('.title')

const arr = [
    function toggle(){
        list.classList.toggle('show')
    },
    
    function toggle(){
        ball.classList.toggle('right')
        bod.classList.toggle('dark')
        dod.classList.toggle('dark')
        nop.classList.toggle('dark')
        fod.classList.toggle('dark')
        proj.classList.toggle('dark')
        console.log(butt, 'clicked')
    }
]

butt.addEventListener('click', arr[1])
ham.addEventListener('click', arr[0])
