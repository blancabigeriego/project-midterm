'use strict';

//SELECT ELEMENTS IN THE DOM

const burgerMenu = document.querySelector('.fa-bars');
const navBar = document.querySelector('.nav');

//CREATE ELEMENTS IN THE DOM

const menuList = document.createElement('ul');
menuList.setAttribute('class', 'hidden');
menuList.setAttribute('class', 'navUl');
menuList.innerHTML = `<li class='menuElement'><a href='#hero' onclick="displayMenu()">Home</a></li><li class='menuElement'><a href='#projects' onclick="displayMenu()">Projects</a></li><li class='menuElement'><a href='#services' onclick="displayMenu()">Services</a></li><li class='menuElement'><a href='../html/contact.html'>Contact Us</a></li>`;
navBar.appendChild(menuList);


//FUNCTIONS

function displayMenu(){
    
    console.log('click')
    menuList.classList.toggle('hidden')

}

//EVENT LISTENERS

burgerMenu.addEventListener('click', displayMenu);