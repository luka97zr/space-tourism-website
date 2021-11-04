const navItems = document.querySelectorAll('.navigation-list');
const destList = document.querySelectorAll('.destination-list');
const destPlanetName = document.querySelector('.destination__main--content-planet');
const destPlanetDesc = document.querySelector('.destination__main--content-description')
const destAvgDist = document.getElementById('avg_dist');
const destEstTime = document.getElementById('est_time');
const planetImg = document.getElementById('dest_img')

var xhttp = new XMLHttpRequest();
let response;
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // console.log(xhttp.response)
         response = xhttp.response;
        response = JSON.parse(response);

    }
};
xhttp.open("GET", "starter-code/data.json", true);
xhttp.send();


//Destination
destList.forEach((dest,id) => {
    dest.addEventListener('click', ()=>{
     ChangeContent(response.destinations[id]);
     dest.classList.add('active');
        
    })
})


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
    removePlanetClasses()

}













