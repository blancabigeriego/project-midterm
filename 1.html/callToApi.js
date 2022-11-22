'use strict';
//GET ELEMENTS FROM THE DOM

const projectsBox = document.querySelector('.box');




//CALL TO API


function getData(){
    fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
    .then((response) => response.json())
    .then((data) => renderHTML(data));
    
}

//FUNCTIONS

function renderHTML(projects){
    
    /*for (let project of projects){
        
       let html= `<img src='${project.image}' alt='${project.name} picture'/>
       <h4>${project.name}</h4>
       <p>${project.description}</p>
       <a href='../html/projects.html'>Learn More</a>`
       
        eachProjectHomePage.innerHTML = html;
        console.log(eachProjectHomePage)*/

        console.log(projects)

        projects.forEach(project => {
            const eachProjectHomePage = document.createElement('article');
            eachProjectHomePage.classList.add('single-project');
            let html= `<img src='${project.image}' alt='${project.name} picture'/>
            <h4>${project.name}</h4>
            <p>${project.description}</p>
            <a href='../html/projects.html'>Learn More</a>`
            eachProjectHomePage.innerHTML = html;
            
            projectsBox.appendChild(eachProjectHomePage);
        });
       
       }






//ON LOAD LISTENER
window.onload = (event) =>{
    getData();
}