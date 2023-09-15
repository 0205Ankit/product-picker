import "./style.css";
import { swiper } from "./helperFunctions/swiperInitialize";
import prevArrow from "./assets/left-arrow.png";
import nextArrow from "./assets/right-arrow.png";
import chocolateData from "./chocolates.json";
import { addToBundle } from "./helperFunctions/addToBundle";

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
    <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      ${chocolateData.data
        .map((item) => {
          const itemJSON = encodeURIComponent(JSON.stringify(item));
          return `<div key=${item.id} class="swiper-slide">
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
`;

swiper();

const addToBundleButtons = document.querySelectorAll(".addToBundle");

addToBundle(addToBundleButtons);

// setupCounter(document.querySelector("#counter"));
