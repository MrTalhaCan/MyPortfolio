const floatField = document.querySelectorAll('.floatField');
const floatContainer = document.querySelectorAll('.float-container');

floatField.forEach(element => {
    element.addEventListener('focus', () => {
        element.parentElement.classList.add('active');
    });

    element.addEventListener('blur', () => {
        if(element.value == ''){
            element.parentElement.classList.remove('active');
        }
    });
})