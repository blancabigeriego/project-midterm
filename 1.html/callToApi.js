
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

//This function will return my data when i press in the anchor on each card

function getDataTest(){
    return fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
    .then((response) => response.json())
    .then((data) => data.reverse());
    


}

//FUNCTIONS




//This function renders the other projects on Project Page



function renderProjectsProjectPage(projects, id){
    
    projectsBoxProjectPage.innerHTML = '';
    
    if(!id || id === '1'){
        let only3 = projects.slice(1,4);
        for(let i=0; i< only3.length; i++){
        let html=`<article class="single-project">
        <img src="${only3[i].image}" alt="${only3[i].name} picture" />
        <div class="text">
        <h4>${only3[i].name}</h4>
        <p>${only3[i].description}</p>
        <a onclick="renderMainProject(null, ${only3[i].uuid})" href="#">Learn More</a>
        </div>
        </article>`
        projectsBoxProjectPage.innerHTML += html;
        
        }
    }
    if(id === '2'){
        let only3 = projects.splice(1,1);
        
        for(let i=0; i< projects.length; i++){
            let html=`<article class="single-project">
            <img src="${projects[i].image}" alt="${projects[i].name} picture" />
            <div class="text">
            <h4>${projects[i].name}</h4>
            <p>${projects[i].description}</p>
            <a onclick="renderMainProject(null, ${projects[i].uuid})"  href="#">Learn More</a>
            </div>
            </article>`
            projectsBoxProjectPage.innerHTML += html;
        }
    }

    if(id ==='3'){
        let only3 = projects.splice(2,1);
        for(let i=0; i< projects.length; i++){
            let html=`<article class="single-project">
            <img src="${projects[i].image}" alt="${projects[i].name} picture" />
            <div class="text">
            <h4>${projects[i].name}</h4>
            <p>${projects[i].description}</p>
            <a onclick="renderMainProject(null, ${projects[i].uuid})"  href="#">Learn More</a>
            </div>
            </article>`
            projectsBoxProjectPage.innerHTML += html;
        } 
    }
    if(id === '4'){
        let only3 = projects.splice(3,1);
        
        for(let i=0; i< projects.length; i++){
            let html=`<article class="single-project">
            <img src="${projects[i].image}" alt="${projects[i].name} picture" />
            <div class="text">
            <h4>${projects[i].name}</h4>
            <p>${projects[i].description}</p>
            <a onclick="renderMainProject(null, ${projects[i].uuid})" href="#">Learn More</a>
            </div>
            </article>`
            projectsBoxProjectPage.innerHTML += html;
        }
        
    }
    
    
    


}

//This function renders the first project or the clicked project on the Projects page



async function renderMainProject(projects,id){
    let savedId = '';

   
   
    if(projects === null){
        
    
        projects = await getDataTest();
        savedId = id + "";
        
        console.log(projects)
        
        
    }else{
     savedId = localStorage.getItem('id');

    }
    
    if(!savedId || savedId=== '1' ){
    let mainProject = projects.filter( project=> project.uuid === '1');
   
    mainProjectSection.innerHTML = `<h1>${mainProject[0].name}</h1>
    <div class='details'>
    <h2>${mainProject[0].description}</h2>
    <p><strong class="colour">Completed on</strong> ${mainProject[0].completed_on}</p>
    </div>
    <div class="project-container">
    <img src="${mainProject[0].image}" alt="${mainProject[0].name} picture" />
    <p>${mainProject[0].content}</p>
    </div>`
    
    }
  
    if(savedId=== '2'){
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
    if(savedId=== '3'){
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
        if(savedId === '4'){
            let mainProject = projects.filter( project=> project.uuid === '4');
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
        renderProjectsProjectPage(projects, savedId);
    
    }

    
    
    
   

//This function saves the ID of the project when you clicked on Learn more to display it on project page
function saveId(id){
    localStorage.setItem('id', id);
    
}

//This function renders the projects in the Home Page

function renderProjectsHomePage(arr){
    let sorted= arr.sort((a,b)=>{
        let da = new Date(a.completed_on),
            db = new Date(b.completed_on);
            return da - db;

    })

    
    for(let i= 3; i > 0; i--){
        const eachProjectHomePage = document.createElement('article');
        eachProjectHomePage.classList.add('single-project');
        let html = `<img src='${sorted[i].image}' alt='${sorted[i].name} picture'/>
        <h4>${sorted[i].name}</h4>
        <p>${sorted[i].description}</p>
        <a onclick="saveId(${sorted[i].uuid})" href='../html/project.html' id='${sorted[i].uuid}'>Learn More</a> `;
        eachProjectHomePage.innerHTML = html;
        projectsBox.appendChild(eachProjectHomePage);
    }
}

function spinner(){
    console.log('spinner')
    let spinnerContainer = document.getElementById('load-container');
    spinnerContainer.style.visibility = 'hidden';
    spinnerContainer.style.opacity = '0';
}

//This calls every render function and passes the data that was fetched from API


function sortData(projects){
    if(window.location.href.includes('project')){
   
        renderMainProject(projects);
        
        
    }
    if(window.location.href.includes('home')){
        renderProjectsHomePage(projects);
        
    }
    if(window.location.href.includes('contact')){
        
    }
}




//ON LOAD LISTENER
window.onload = (event) =>{
    
    
    getData();
    spinner();
    
};



 




