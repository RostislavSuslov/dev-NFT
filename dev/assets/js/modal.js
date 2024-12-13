const modalTriger = document.querySelector('[data-target]')
const modaWindow = document.querySelector('.custom-modal')
const modalClose = document.querySelector('.custom-modal__close')


const closeModal =()=> modaWindow.classList.remove('show')

modalTriger.addEventListener('click', ()=> {
    modaWindow.classList.add('show')
})


console.log(modalClose);


modalClose.addEventListener('click', closeModal)
