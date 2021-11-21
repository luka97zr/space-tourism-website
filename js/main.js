const navItems = document.querySelectorAll('.navigation-list');
const destList = document.querySelectorAll('.destination-list');
const destPlanetName = document.querySelector('.destination__main--content-planet');
const destPlanetDesc = document.querySelector('.destination__main--content-description')
const destAvgDist = document.getElementById('avg_dist');
const destEstTime = document.getElementById('est_time');
const planetImg = document.getElementById('dest_img')
const nav = document.querySelector('.nav')
const navBurger = document.querySelector('.nav_burger')


const crewListBtn = document.querySelectorAll('.radio-btn');
const crewTitle = document.getElementById('crew__title');
const crewName = document.getElementById('crew__name');
const crewDesc = document.getElementById('crew__desc');
const crewImg = document.getElementById('crew__member--img');

const techListBtn = document.querySelectorAll('.technology-btn');
const techImg = document.getElementById('tech__img')
const techTitle = document.getElementById('technology__title')
const techDesc = document.getElementById('technology__desc')

var xhttp = new XMLHttpRequest();
let response;
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // console.log(xhttp.response)
         response = xhttp.response;
        response = JSON.parse(response);
        console.log(response)

    }
};
xhttp.open("GET", "starter-code/data.json", true);
xhttp.send();


//Destination
function removePlanetClasses(){
    destList.forEach(item => item.classList.remove('active'))
}

function ChangeContent(planetName){
     //Name
     console.log(planetName.name.toLowerCase());
     destPlanetName.innerHTML = planetName.name;
     //Descr
     destPlanetDesc.innerHTML = planetName.description;
     //Info bottom
     destAvgDist.innerHTML = planetName.distance;
     destEstTime.innerHTML = planetName.travel;

     //Img
    planetImg.src = `starter-code/assets/destination/image-${planetName.name.toLowerCase()}.webp`;
    planetImg.animate([
    {opacity:'0'},
    {opacity:'100'}
    ],{
        duration: 300,

    })
    removePlanetClasses()

}


destList.forEach((dest,id) => {
    dest.addEventListener('click', ()=>{
     ChangeContent(response.destinations[id]);
     dest.classList.add('active');
        
    })
})





//Crew
function removeCrewClasses(){
    crewListBtn.forEach(btn => btn.classList.remove('active'))
   }
   
   function crewContent(crewMember){
       crewTitle.innerHTML = crewMember.role;
       crewName.innerHTML = crewMember.name;
       crewDesc.innerHTML = crewMember.bio;
       crewImg.src = `starter-code/assets/crew/image-${crewMember.name.toLowerCase().replace(' ','-')}.webp`;
       crewImg.animate([
          {opacity:'0'},
           {opacity:'100'}
       ],{
           duration: 400
       })
       removeCrewClasses();
   
   }

   crewListBtn.forEach((btn,i)=>{
    btn.addEventListener('click',()=>{
       crewContent(response.crew[i])
       btn.classList.add('active')
    })
})

//technology
function removeTechClasses(){
    techListBtn.forEach(btn => btn.classList.remove('active'))
}
function techContent(tech){
    techTitle.innerHTML = tech.name;
    techDesc.innerHTML = tech.description;
     techImg.src = `starter-code/assets/technology/image-${tech.name.toLowerCase().replace(' ','-')}-portrait.jpg`;
     removeTechClasses();

}

techListBtn.forEach((btn,i)=>{
    btn.addEventListener('click',()=>{
        techContent(response.technology[i])
        btn.classList.add('active')
    })
})



//Mobile nav
navBurger.addEventListener('click',()=>{
    nav.classList.toggle('active');
    navBurger.classList.toggle('active')
})