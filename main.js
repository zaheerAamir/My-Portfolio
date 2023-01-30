const ham = document.querySelector('.respNav')
const list = document.querySelector('.navlist')

const butt = document.querySelector('#LtoD')
const ball = document.querySelector('.ball')
const bod = document.querySelector('body')

const card = document.querySelectorAll('#proj')


/* navlist:  */
const anchor = document.querySelectorAll('.anchor')

/* title sudoku solver in the projects section (p tag) */
const proj = document.querySelectorAll('.title')
const proj5 = document.querySelector('.title5')
const cont = document.querySelectorAll('.proj_cont')

const dup = document.querySelector('.proj')


const arr = [
    function toggle(){
        list.classList.toggle('show')
    },
    
    function toggle(){
        ball.classList.toggle('right')
        butt.classList.toggle('dark')
        bod.classList.toggle('dark')

        anchor.forEach(anc => anc.classList.toggle('dark'))


        proj.forEach(element => element.classList.toggle('dark'))
        cont.forEach(element => element.classList.toggle('dark'))
        proj5.classList.toggle('dark')

        dup.classList.toggle('dark')
        console.log(butt, 'clicked')
    }
]

butt.addEventListener('click', arr[1])
ham.addEventListener('click', arr[0])


ham.addEventListener('click', () => {
    const isOpened = ham.getAttribute('aria-expanded')
    if(isOpened == 'false'){
        ham.setAttribute('aria-expanded','true')
    }
    else {
        ham.setAttribute('aria-expanded','false')
    }
})

card.forEach(element => 
    element.addEventListener('click', () => {
        const isOpened = element.getAttribute('aria-expanded')
        if(isOpened == 'false'){
            element.setAttribute('aria-expanded', 'true')
        }
        else {
            element.setAttribute('aria-expanded', 'false')
        }
    }))