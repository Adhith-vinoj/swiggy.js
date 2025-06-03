 const refine =document.querySelector("#active")
 const filterSec = document.querySelector(".filter-nav")
 const closingBtn = document.querySelector(".close-btn")
 

filterSec.style.display = "none";
refine.addEventListener("click", ()=>{
    filterSec.style.display = "block";
})

closingBtn.addEventListener("click", ()=>{
    filterSec.style.display = "none"
})


