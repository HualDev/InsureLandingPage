const sMenu=document.getElementById('hambClose')
const hamburger=document.getElementById('hamburger')
const close=document.getElementById('close')
const sub=document.getElementById('subMenu')
sMenu.addEventListener('click',()=>{
    sub.classList.toggle('show')
   hamburger.classList.toggle('nShow')
   close.classList.toggle('close')  
})