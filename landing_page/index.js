const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')
const closeBtn = document.getElementById('close')

closeBtn.style.display ='none'


function toggleButton() {
    navList.classList.add('show')
    closeBtn.style.display = 'block'
hamburgerButton.style.display ='none'
}
function closeModal(){
    navList.classList.remove('show')
    closeBtn.style.display ='none'
    hamburgerButton.style.display ='block'


}

hamburgerButton.addEventListener('click', toggleButton)
closeBtn.addEventListener('click', closeModal)