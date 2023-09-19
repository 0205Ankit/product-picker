import "./style.css";
import { slider } from "./helperFunctions/slider";
import prevArrow from "./assets/left-arrow.png";
import nextArrow from "./assets/right-arrow.png";
import chocolateData from "./chocolates.json";
import { addToBundle, fetchData } from "./helperFunctions/addToBundle";

document.querySelector(".slider_container").innerHTML = `
  <div class="slider_box">
    <div class="heading_container"> 
      <h1>Chocolates</h1>
      <div>
        <button class="nav_buttons" id="prev_button">
        <img src="${prevArrow}"/>
        </button>
        <button class="nav_buttons" id="next_button">
        <img src="${nextArrow}"/>
        </button>
      </div>
    </div>
    <div class="slider">
    <div class="slider-wrapper">
      <div class="slider-slide-container">
      ${chocolateData.data
        .map((item) => {
          const itemJSON = encodeURIComponent(JSON.stringify(item));
          return `<div key=${item.id} class="slider-slide">
            <img src="${item.image}" alt="images"/>
            <p class="slider_title">
              ${item.name}
            </p>
            <p class="product_info">
              ₹${item.price}.00
              <span style="font-size:12px">
                (per ${item.size})
              </span>
            </p>
            <button class="addToBundle" data-item="${itemJSON}">
              Add to bundle
            </button>
          </div>`;
        })
        .join("")}
      </div>
    </div>
  </div>
  </div>
`;

document.querySelector(".card_container").innerHTML = `
<div class="info_text_box">
      <div>
         <p class="info_text">
            Create Your Bundle
          </p>
        <p class="info_text">
            by adding the items from the Collection
        </p>
      </div>
</div>
`;

slider();

const addToBundleButtons = document.querySelectorAll(".addToBundle");

addToBundle(addToBundleButtons);

const modalOverlay = document.querySelector(".modal-overlay");

modalOverlay.addEventListener("click", () => {
  document.querySelector(".modal-container").style.display = "none";
});

// setupCounter(document.querySelector("#counter"));
