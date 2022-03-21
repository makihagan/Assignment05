const $ = (id) => document.getElementById(id);

let empForm = $('empForm');
let id = $('id');
let name = $('name');
let ext = $('ext');
let email = $('email');
let department = $('department');
let submit = $('submit');

empForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(`ID: ${id.value}`);
    console.log(`Name: ${name.value}`);
    console.log(`Extension: ${ext.value}`);
    console.log(`Email: ${email.value}`);
    console.log(`Department: ${department.value}`);
})