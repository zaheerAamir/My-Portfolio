const ham = document.querySelector('.respNav')
const list = document.querySelector('.navlist')

const butt = document.querySelector('#LtoD')
const ball = document.querySelector('.ball')
const bod = document.querySelector('body')


/* navlist:  */
const dod = document.querySelector('.aOne')
const nop = document.querySelector('.aTwo')
const fod = document.querySelector('.aThree')

/* title sudoku solver in the projects section (p tag) */
const proj = document.querySelector('.title')
const proj2 = document.querySelector('.title2')
const proj5 = document.querySelector('.title5')

const dup = document.querySelector('.proj')

/* button About me*/
const tubb = document.querySelector('#abtme')

const arr = [
    function toggle(){
        list.classList.toggle('show')
    },
    
    function toggle(){
        ball.classList.toggle('right')
        butt.classList.toggle('dark')
        bod.classList.toggle('dark')
        dod.classList.toggle('dark')
        nop.classList.toggle('dark')
        fod.classList.toggle('dark')
        proj.classList.toggle('dark')
        proj2.classList.toggle('dark')
        proj5.classList.toggle('dark')
        tubb.classList.toggle('dark')
        dup.classList.toggle('dark')
        console.log(butt, 'clicked')
    }
]

butt.addEventListener('click', arr[1])
ham.addEventListener('click', arr[0])
