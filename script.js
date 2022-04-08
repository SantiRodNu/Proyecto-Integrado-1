


const buttonIngresar = document.querySelector('#btnIng');
const formPopup = document.querySelector('#myForm');
const closer = document.querySelector('#cross');

buttonIngresar.addEventListener('click', () =>{
    formPopup.classList.add('show');
})

closer.addEventListener('click', () =>{
    formPopup.classList.remove('show');
})