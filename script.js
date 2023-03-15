let passwords = document.querySelectorAll('.error');
let alat = document.querySelector('.message');
passwords[1].addEventListener('input', () => {
    if(passwords[0].value !== passwords[1].value){
        alat.textContent = '* passwords do not match';
        passwords[0].style.borderColor = 'red';
        passwords[1].style.borderColor = 'red';
    }
    else{
        alat.textContent = '';
        passwords[0].style.borderColor = 'green';
        passwords[1].style.borderColor = 'green';
    }
});