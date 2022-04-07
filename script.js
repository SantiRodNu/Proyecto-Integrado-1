const buttonIngresar = document.querySelector('#btnIng');
const formPopup = document.getElementById('#myForm');
const closer = document.getElementById('#cross');

buttonIngresar.addEventListener('click', () =>{
    formPopup.classList.add('show');
})


closer.addEventListener('click', () =>{
    formPopup.classList.remove('show');
})