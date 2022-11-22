'use strict';

//SELECT ELEMENTS IN THE DOM

const burgerMenu = document.querySelector('.fa-bars');
const navBar = document.querySelector('.nav');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const textArea = document.getElementById('message');
const form = document.querySelector('form');
const btn = document.querySelector('.submit');

//CREATE ELEMENTS IN THE DOM

const menuList = document.createElement('ul');
menuList.setAttribute('class', 'hidden');
menuList.setAttribute('class', 'navUl');
menuList.innerHTML = `<li class='menuElement'><a href='#hero' onclick="displayMenu()">Home</a></li><li class='menuElement'><a href='#projects' onclick="displayMenu()">Projects</a></li><li class='menuElement'><a href='#services' onclick="displayMenu()">Services</a></li><li class='menuElement'><a href='../html/contact.html'>Contact Us</a></li>`;
navBar.appendChild(menuList);



//FUNCTIONS

//This function toggles the menu
function displayMenu(){
    
    console.log('click')
    menuList.classList.toggle('hidden')

}



function validateForm(ev){
    ev.preventDefault();
    if(nameInput.Value === "" || emailInput.value ==="" || phoneInput.value === "" || message.value === ""){
        let message = document.createElement('p');
        message.innerHTML = "**You must fill all the fields!!";
        form.appendChild(message);

    }
}

//EVENT LISTENERS

burgerMenu.addEventListener('click', displayMenu);
btn.addEventListener('click', validateForm)