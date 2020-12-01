const navButtons = document.querySelectorAll('a');

navButtons.forEach((elem)=>{
    elem.addEventListener('mouseover', function(){
        elem.style.backgroundColor = "red"
    })
})