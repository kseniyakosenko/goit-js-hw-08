
import throttle from 'lodash.throttle';

const LOCAL_KEY = "feedback-form-state";
const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input [name="email"]');
const textareaEl = document.querySelector('textarea [name="message"]');

let formData = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};

formEl,addEventListener("input",  throttle(storageFormData, 500));
formEl.addEventListener('submit', onFormSubmit);

reloadPage();

function storageFormData(e) {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
    e.preventDefault();
  
    console.log(formData);
    
    const value1 = inputEl ? inputEl.value : '';
    const value2 = textareaEl ? textareaEl.value : '';

    if (value1 === '' || value2 === '') {
        return alert(`Заповніть всі поля!`);
    }

    
        e.currentTarget.reset();
        localStorage.removeItem(LOCAL_KEY);
        formData = {};
    }


function reloadPage() {
  if (formData) {
    let { email, message } = formEl.elements;
    email.value = formData.email || '';
    message.value = formData.message || '';
  }
    
}
 