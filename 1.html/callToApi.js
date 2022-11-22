'use strict';
//GET ELEMENTS FROM THE DOM

//From Home Page
const projectsBox = document.querySelector('.box');


//From Projects Page
const mainProjectSection = document.querySelector('#project');
const projectsBoxProjectPage = document.querySelector('.box-1');





//CALL TO API


function getData(){
    fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
    .then((response) => response.json())
    .then((data) => sortData(data.reverse()));


        
    
}

//FUNCTIONS


//This function renders the other projects on Project Page

function renderProjectsProjectPage(projects){
    console.log(projects)
    let only3 = projects.slice(1,4);
    for(let i=0; i< only3.length; i++){
        let html=`<article class="single-project">
        <img src="${only3[i].image}" alt="${only3[i].name} picture" />
        <div class="text">
        <h4>${only3[i].name}</h4>
        <p>${only3[i].description}</p>
        <a href="">Learn More</a>
        </div>
        </article>`
        projectsBoxProjectPage.innerHTML += html;
    }


}

//This function renders the first project on the Projects page

function renderMainProject(projects){

    if(!localStorage.getItem('id') || localStorage.getItem('id')=== '1' ){
    let mainProject = projects.filter( project=> project.uuid === '1');
   
    mainProjectSection.innerHTML = `<h1>${mainProject[0].name}</h1>
    <div class='details'>
    <h2>${mainProject[0].description}</h2>
    <p><strong class="colour">Completed on</strong>${mainProject[0].completed_on}</p>
    </div>
    <div class="project-container">
    <img src="${mainProject[0].image}" alt="${mainProject[0].name} picture" />
    <p>${mainProject[0].content}</p>
    </div>`
    
    }
  
    if(localStorage.getItem('id')=== '2'){
    let mainProject = projects.filter( project=> project.uuid === '2');

    mainProjectSection.innerHTML = `<h1>${mainProject[0].name}</h1>
    <div class='details'>
    <h2>${mainProject[0].description}</h2>
    <p><strong class="colour">Completed on</strong>${mainProject[0].completed_on}</p>
    </div>
    <div class="project-container">
    <img src="${mainProject[0].image}" alt="${mainProject[0].name} picture" />
    <p>${mainProject[0].content}</p>
    </div>`
    
    }
    if(localStorage.getItem('id')=== '3'){
        let mainProject = projects.filter( project=> project.uuid === '3');
        console.log(mainProject)
    
        mainProjectSection.innerHTML = `<h1>${mainProject[0].name}</h1>
        <div class='details'>
        <h2>${mainProject[0].description}</h2>
        <p><strong class="colour">Completed on</strong>${mainProject[0].completed_on}</p>
        </div>
        <div class="project-container">
        <img src="${mainProject[0].image}" alt="${mainProject[0].name} picture" />
        <p>${mainProject[0].content}</p>
        </div>`
        
        }


    
    }
    
   


function saveId(id){
    localStorage.setItem('id', id);
    
}

//This function renders the projects in the Home Page

function renderProjectsHomePage(arr){
    let only3 = arr.slice(0,3);
    for(let i= 0; i< only3.length; i++){
        const eachProjectHomePage = document.createElement('article');
        eachProjectHomePage.classList.add('single-project');
        let html = `<img src='${only3[i].image}' alt='${only3[i].name} picture'/>
        <h4>${only3[i].name}</h4>
        <p>${only3[i].description}</p>
        <a onclick="saveId(${only3[i].uuid})" href='../html/project.html' id='${only3[i].uuid}'>Learn More</a> `;
        eachProjectHomePage.innerHTML = html;
        projectsBox.appendChild(eachProjectHomePage);
    }
}



//This calls every render function and passes the data that was fetched from API


function sortData(projects){
    if(window.location.href.includes('project')){
   
        renderMainProject(projects);
        renderProjectsProjectPage(projects);
    }
    if(window.location.href.includes('home')){
        renderProjectsHomePage(projects);
        
    }
}




//ON LOAD LISTENER
window.onload = (event) =>{
    
    
    getData();
    
    
}