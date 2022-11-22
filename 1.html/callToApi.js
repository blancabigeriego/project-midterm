'use strict';
//GET ELEMENTS FROM THE DOM

//From Home Page
const projectsBox = document.querySelector('.box');

//From Projects Page
const mainProjectSection = document.querySelector('#project');





//CALL TO API


function getData(){
    fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
    .then((response) => response.json())
    .then((data) => 
        renderHTML(data.reverse()));

    
        
    
}

//FUNCTIONS

function renderMainProject(projects){
   const mainProject = projects.filter( project=> project.uuid === '1');
   
   mainProjectSection.innerHTML = `<h1>${mainProject[0].name}</h1>
    <div class='details'>
    <h2>${mainProject[0].description}</h2>
    <p><strong class="colour">Completed on</strong>${mainProject[0].completed_on}</p>
    </div>
    <div class="project-container">
    <img src="${mainProject[0].image}" alt="${mainProject[0].name} picture" />
    <p>${mainProject[0].content}</p>
    </div>`
   
};

function renderProjectsHomePage(arr){
    let only3 = arr.slice(0,3);
    for(let i= 0; i< only3.length; i++){
        const eachProjectHomePage = document.createElement('article');
        eachProjectHomePage.classList.add('single-project');
        let html = `<img src='${only3[i].image}' alt='${only3[i].name} picture'/>
        <h4>${only3[i].name}</h4>
        <p>${only3[i].description}</p>
        <a href='../html/projects.html'>Learn More</a> `;
        eachProjectHomePage.innerHTML = html;
        projectsBox.appendChild(eachProjectHomePage);
    }
}


//This function renders the projects in the Home Page

function renderHTML(projects){
    renderProjectsHomePage(projects);
    renderMainProject(projects);
};






//ON LOAD LISTENER
window.onload = (event) =>{
    getData();
}