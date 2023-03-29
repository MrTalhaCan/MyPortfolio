const   apiURL      =   "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a5508f22d7d172241e275116e2501c52&page=1";
const   imgPath     =   "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/";

const mNav      =   document.querySelector(".m-nav");
const   movsEl      =   document.querySelector(".movies");
async function getMovies(prmApi){
    const resp      =   await fetch(prmApi);
    const respData  =   await resp.json();
    
    let spanPaint;
    movsEl.innerHTML    =   '';   
    respData.results.forEach(element => {
        
        if(element.vote_average <= 5){
            spanPaint   =   "red";
        }else if((element.vote_average > 5) && ((element.vote_average <= 6.5))){
            spanPaint   =   "orange";
        }else{
            spanPaint   =   "rgb(54, 228, 0)";
        }
        movsEl.innerHTML += `<div class="movie-frame" style="box-shadow: 0px 3px 6px 2px #000;">
                            <div class="movie-photo">
                                <img src="${imgPath}${element.poster_path}">
                            </div>
                            <div class="movie-info">
                                <div class="movie-title">${element.original_title}</div>
                                <div class="movie-vote"><span style="color:${spanPaint}">${element.vote_average}</span></div>
                            </div>
                        </div>`;
    });
}
getMovies(apiURL);

const navBtn    =   document.querySelector("nav > img");
navBtn.addEventListener("click", () => {
    mNav.classList.toggle("show");
})

const container   =   document.querySelector(".container");
function scroll(){
    if(window.scrollY > 0){
        document.querySelector("nav").style.backgroundColor     =   "rgba(10, 10, 50, 0.8)";
    }else{
        document.querySelector("nav").style.backgroundColor     =   "rgba(0, 0, 0, 0.2)";
    }
}