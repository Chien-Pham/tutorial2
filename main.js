const nameInput = document.querySelector('#name');
const ageInput = document.querySelector('#age');
const maleCheckbox = document.querySelector('#male');
const femaleCheckbox = document.querySelector('#female');
const uploadFile = document.querySelector('#upload');
const form = document.querySelector('#form');
let url;

uploadFile.addEventListener('change', (e) => {
const file = e.target.files[0];
url = URL.createObjectURL(file);
});

form.addEventListener('submit', (e) => {
e.preventDefault();
const nameValue = nameInput.value;
const ageValue = ageInput.value;
let gender;
if(maleCheckbox.checked) {
    gender = 'male';
} else {
    gender = 'female';

}
const div = document.createElement('div');
div.innerHTML = `
<h3>Name: ${nameValue}</h3>
<h4>Age: ${ageValue}</h4>
<h4>Gender: ${gender}</h4>
<img src = ${url} />
`;
document.querySelector('body').appendChild(div);
})