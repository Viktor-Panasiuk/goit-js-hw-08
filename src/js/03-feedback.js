import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');

let formData = {};

loadStorageToForm(formRef);
formRef.addEventListener('input', throttle(saveFormToStorage, 500));
formRef.addEventListener('submit', submitForm);


function saveFormToStorage(event) {
    formData[event.target.name] = event.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)); 
};


function loadStorageToForm(formRef) {
    const dataString = localStorage.getItem(STORAGE_KEY);
    

    if (dataString) {
        formData = JSON.parse(dataString);
        setElements(formData, formRef.elements);
    }
};


function submitForm(event) {
    event.preventDefault();

    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    
    formData = {};

    event.currentTarget.reset();
}


function setElements(object, elements) {
    for (const key of Object.keys(object)) {
        elements[key].value = object[key];
    }

};



// JSON.stringify(dog)

// JSON.parse(json)