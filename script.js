const refine = document.querySelector("#active");
const filterSec = document.querySelector(".filter-nav");
const closingBtn = document.querySelector(".close-btn");

filterSec.style.display = "none";
refine.addEventListener("click", () => {
  filterSec.style.display = "block";
});

closingBtn.addEventListener("click", () => {
  filterSec.style.display = "none";
});

let data = [];
let fetching = async () => {
  const res = await fetch("product.json");
  data = await res.json();
  mainFetch(data);
};
fetching();

let mainFetch = (items) => {
  const listGrid = document.querySelector(".restaurant-list");
  listGrid.innerHTML = ``;

  items.forEach((item) => {
    const lableItems = document.createElement("div");
    lableItems.innerHTML = `
           <div class="list-grid">
                        <div class="position-grid">
                            <div class="position-child">
                                <div class="border-child">
                                    <img class="pizza"
                                        src="${item.img}"
                                        alt="Pizza Hut" />
                                </div>
                            </div>
                        </div>
                        <div class="content-head">
                            <div>
                                <span class="pizzas">${item.name}</span>
                            </div>
                            <div class="ratings">
                                <div class="rate">
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                                        width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
                                        strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)">
                                        <circle cx="10" cy="10" r="9"
                                            fill='url("#StoreRating20_svg__paint0_linear_32982_71567")'></circle>
                                        <path
                                            d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                                            fill="#FFFFFF"></path>
                                        <defs>
                                            <linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10"
                                                y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#21973B"></stop>
                                                <stop offset="1" stop-color="#128540"></stop>
                                            </linearGradient>
                                            <linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10"
                                                y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#21973B"></stop>
                                                <stop offset="1" stop-color="#128540"></stop>
                                            </linearGradient>
                                            <linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10"
                                                y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#21973B"></stop>
                                                <stop offset="1" stop-color="#128540"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div class="min">
                                    <span>${item.Rating} .</span>
                                    <span>${item.Time}</span>
                                </div>
                            </div>
                            <div class="sw-rest">
                                <span>${item.Type}</span>
                                <div>${item.Location}</div>
                            </div>
                        </div>
                    </div>
        `;
    listGrid.appendChild(lableItems);
  });
};

let filterRating = () => {
  let filterAbove = data.filter((rating) => {
    return rating.Rating >= 4.0;
  });

  mainFetch(filterAbove);
};

let ratingAbove = ()=>{
  let filter = data.filter((rating)=>{
    return rating.Rating >= 4.5;
  })
  mainFetch(filter)
}

let ratingBelow = ()=>{
  let filtering = data.filter((rating)=>{
    return rating.Rating >= 3.5
  })
  mainFetch(filtering)
}

let filterType = () => {
  let filterFood = data.filter((type) => {
    return type.foodType === "veg";
  });
  mainFetch(filterFood);
};



let filterNon = () => {
  let filterNonVeg = data.filter((type) => {
    return type.foodType === "non-veg";
  });
  mainFetch(filterNonVeg);
};



let filterOffers = () => {
  let filterSpecial = data.filter((list) => {
    return list.Special === "offers";
  });
  mainFetch(filterSpecial);
};


let filterRate = ()=>{
    let filterValue= data.filter((items) =>{
        return items.price >=300 && items.price <= 600
    })
    mainFetch(filterValue);
}


let filterLess = ()=>{
    let filterLow = data.filter((items)=>{
        return items.price <= 300
    })
    mainFetch(filterLow)
}




const rateingSection = document.querySelector('.rating-section')
rateingSection.style.display = "none"

const ratingItems = document.querySelector('#rating-items')
ratingItems.addEventListener('click', () =>{
 rateingSection.style.display = "flex";
 foodSection.style.display = "none";
 
})


const selectItems = document.getElementById('select-type');
const foodSection = document.querySelector('.food-section')
selectItems.addEventListener('click', ()=>{
  rateingSection.style.display = "none"
  foodSection.style.display = "flex"
})


let refineSec = document.querySelector("#active-rating");
refineSec.addEventListener("click", filterRating);

let refineType = document.querySelector("#active-class");
refineType.addEventListener("click", filterType);

let refineOffers = document.querySelector("#active-offers");
refineOffers.addEventListener("click", filterOffers);

let refineValues = document.querySelector("#active-rate")
refineValues.addEventListener("click", filterRate)

let refineless = document.querySelector('#active-less')
refineless.addEventListener("click", filterLess);

let inputFilter = document.querySelector("#ratingBelow");
inputFilter.addEventListener("click", filterRating )

let ratingAboveRate = document.querySelector("#ratingAbove");
ratingAboveRate.addEventListener("click", ratingAbove)

let ratingBelowRate = document.querySelector("#ratingBelow");
ratingBelowRate.addEventListener("click", ratingBelow)

let radioVeg = document.getElementById("radio-veg");
radioVeg.addEventListener('click', filterType)

let radioNonVeg = document.getElementById("radio-nonVeg");
radioNonVeg.addEventListener('click', filterNon)
