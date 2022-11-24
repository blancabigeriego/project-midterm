//CALL TO API FOR RANDOM PROJECTS

function refreshData(){
    
    fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
    .then((response) => response.json())
    .then((data) => getRandomProject(data.reverse()));
}


//SELECT ELEMENTS IN THE DOM
//FROM ALL PAGES
const burgerMenu = document.querySelector('.fa-bars');
const navBar = document.querySelector('.nav');
const randomLink = document.querySelector('.random-link');
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


menuList.innerHTML = `<li class='menuElement'><a href='./home.html' onclick="displayMenu()">Home</a></li><li class='menuElement'><a href='./project.html' onclick="displayMenu(), refreshData()">Projects</a></li><li class='menuElement'><a href='./home.html#services' onclick="displayMenu()">Services</a></li><li class='menuElement'><a href='../html/contact.html'>Contact Us</a></li>`;
navBar.appendChild(menuList);






//FUNCTIONS

//This function renders the 3 projects that are left after getting a random one

function getLeftProjects(projects,id){
    
    if(id === 1){
        projectsBoxRandom.innerHTML ="";
        let leftProjects = projects.filter(project => project.uuid != 1);
        for( element of leftProjects){
            let html=`<article class="single-project">
            <img src="${element.image}" alt="${element.name} picture" />
            <div class="text">
            <h4>${element.name}</h4>
            <p>${element.description}</p>
            <a href="">Learn More</a>
            </div>
            </article>`;
            
            projectsBoxRandom.innerHTML += html;
        }
    }
    if(id === 2){
        projectsBoxRandom.innerHTML ="";
        let leftProjects = projects.filter(project => project.uuid != 2);
        for( element of leftProjects){
            let html=`<article class="single-project">
            <img src="${element.image}" alt="${element.name} picture" />
            <div class="text">
            <h4>${element.name}</h4>
            <p>${element.description}</p>
            <a href="">Learn More</a>
            </div>
            </article>`;
            
            projectsBoxRandom.innerHTML += html;
        }
    }
    if(id === 3){
        projectsBoxRandom.innerHTML ="";
        let leftProjects = projects.filter(project => project.uuid != 3);
        for( element of leftProjects){
            let html=`<article class="single-project">
            <img src="${element.image}" alt="${element.name} picture" />
            <div class="text">
            <h4>${element.name}</h4>
            <p>${element.description}</p>
            <a href="">Learn More</a>
            </div>
            </article>`;
            
            projectsBoxRandom.innerHTML += html;
        }
    }
    if(id === 4){
        projectsBoxRandom.innerHTML ="";
        let leftProjects = projects.filter(project => project.uuid != 4);
        for( element of leftProjects){
            let html=`<article class="single-project">
            <img src="${element.image}" alt="${element.name} picture" />
            <div class="text">
            <h4>${element.name}</h4>
            <p>${element.description}</p>
            <a href="">Learn More</a>
            </div>
            </article>`;
            
            projectsBoxRandom.innerHTML += html;
        }
    }

}

//This function renders a random main project
function getRandomProject(projects){
    
    let id = getRandom();
    for(let project of projects){
       
        if(id === parseInt(project.uuid)){
            mainProjectRandom.innerHTML = `<h1>${project.name}</h1>
            <div class='details'>
            <h2>${project.description}</h2>
            <p><strong class="colour">Completed on </strong>${project.completed_on}</p>
            </div>
            <div class="project-container">
            <img src="${project.image}" alt="${project.name} picture" />
            <p>${project.content}</p>
            </div>`
        }
    }
    getLeftProjects(projects, id)
   

};


//This function gets a random number between 1 and 4
function getRandom(){
    
  let randomId =Math.floor(Math.random() * 4 + 1);
  
    return randomId
    
};

//This function toggles the menu
function displayMenu(){
    
    
    menuList.classList.toggle('hidden')

}



function validateForm(ev){
    ev.preventDefault();
    

    if(nameInput.Value === "" || emailInput.value ==="" || phoneInput.value === "" || message.value === ""){
        let message = document.createElement('p');
        message.classList.add('form-message')
        message.innerHTML = "**You must fill all the fields!!";
        form.appendChild(message);

    }
    if(nameInput.value.toLowerCase() === "ironhack" ){
        alert("You cannot be Ironhack, because I am Ironhack.")
    }
}

//EVENT LISTENERS

burgerMenu.addEventListener('click', displayMenu);
randomLink.addEventListener('click', refreshData);

//EVENT LISTENER ONLY FOR CONTACT PAGE
if(window.location.href.includes('contact')){
    btn.addEventListener('click', validateForm);
};


