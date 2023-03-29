const floatFields = document.querySelectorAll('.floatField');
const span = document.querySelector('span');
floatField[2].addEventListener('change', () => {
    if(floatFields[2].value != floatFields[3].value){
        span.innerHTML = "Password should match!";
    }else if(floatFields[2].value == floatFields[3].value){
        span.innerHTML  =   '';
    }
})
floatField[3].addEventListener('change', () => {
    if(floatFields[3].value != floatFields[2].value){
        span.innerHTML = "Password should match!";
    }else if(floatFields[3].value == floatFields[2].value){
        span.innerHTML  =   '';
    }
})

document.querySelector("form").onsubmit = function() {
    return isValidForm();
};

function isValidForm(){
    if(floatFields[2].value != floatFields[3].value){
        return false
    }else{true}
}