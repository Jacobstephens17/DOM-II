const navButtons = document.querySelectorAll('a');
navButtons.forEach((elem)=>{
    elem.addEventListener('mouseover', function(){
        elem.style.backgroundColor = "red"
        
    })
})
navButtons.forEach((elem) =>{
    elem.addEventListener('dblclick', function(){
        elem.style.backgroundColor = "green"
    })
})

const pars = document.querySelectorAll('.btn');
pars.forEach((elem) =>{
    elem.addEventListener('load', function(){
            elem.style.backgroundColor = "purple"
    })
})



const mainHead = document.querySelector('h2');

document.addEventListener('keydown', function(){
    mainHead.style.fontSize = '10rem';
    mainHead.style.color = 'purple';
    
})


const pics = document.querySelector('img');

document.addEventListener('scroll', function(){
    pics.style.display = 'none';
})

const pageBackgr = document.querySelector('body');

window.addEventListener('wheel', function(){
    pageBackgr.style.backgroundColor = 'black';
})