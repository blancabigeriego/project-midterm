//CALL TO API FOR RANDOM PROJECTS

function refreshData(){
    console.log('eyyyy')
    fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
    .then((response) => response.json())
    .then((data) => getRandomProject(data.reverse()));
}


//SELECT ELEMENTS IN THE DOM
//FROM ALL PAGES
const burgerMenu = document.querySelector('.fa-bars');
const navBar = document.querySelector('.nav');
//FROM CONTACT PAGE
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const textArea = document.getElementById('message');
const form = document.querySelector('form');
const btn = document.querySelector('.submit');
//FROM PROJECTS PAGE
const mainProjectRandom = document.querySelector('#project');
const projectsBoxRandom = document.querySelector('.box-1');

//CREATE ELEMENTS IN THE DOM

const menuList = document.createElement('ul');

menuList.setAttribute('class', 'hidden');
menuList.classList.add('navUl');


menuList.innerHTML = `<li class='menuElement'><a href='#hero' onclick="displayMenu()">Home</a></li><li class='menuElement'><a href='#projects' onclick="displayMenu(), console.log('clicking'), refreshData()">Projects</a></li><li class='menuElement'><a href='#services' onclick="displayMenu()">Services</a></li><li class='menuElement'><a href='../html/contact.html'>Contact Us</a></li>`;
navBar.appendChild(menuList);






//FUNCTIONS

//This function renders a random main project
function getRandomProject(projects){
    console.log('ey')
    let id = getRandom();
    for(let project of projects){
        console.log(projects)
        if(id === parseInt(project.uuid)){
            mainProjectRandom.innerHTML = `<h1>${project.name}</h1>
            <div class='details'>
            <h2>${project.description}</h2>
            <p><strong class="colour">Completed on</strong>${project.completed_on}</p>
            </div>
            <div class="project-container">
            <img src="${project.image}" alt="${project.name} picture" />
            <p>${project.content}</p>
            </div>`
        }
    }
   

};


//This function gets a random number between 1 and 4
function getRandom(){
    
  let randomId =Math.floor(Math.random() * 4 + 1);
  
    return randomId
    
};

//This function toggles the menu
function displayMenu(){
    
    console.log('Display menu')
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

//EVENT LISTENER ONLY FOR CONTACT PAGE
if(window.location.href.includes('contact')){
    btn.addEventListener('click', validateForm);
};


