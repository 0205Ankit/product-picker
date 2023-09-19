import { card } from "./card";

let data = [];

export const fetchData = () => {
  return data;
};

export const setData = (info) => {
  data = info;
  return data;
};

export const addToBundle = (element) => {
  element.forEach((button) => {
    button.addEventListener("click", function (event) {
      const itemJSON = event.target.getAttribute("data-item");
      const selectedItem = JSON.parse(decodeURIComponent(itemJSON));

      const bundleData = fetchData();

      let totalItem = 0;
      bundleData.forEach((chocol) => (totalItem = totalItem + chocol.quantity));
      if (totalItem >= 8) {
        document.querySelector(".modal-container").style.display = "block";
        return;
      }
      const isAlreadyInBundle = bundleData.some(
        (chocolate) => chocolate.id === selectedItem.id
      );

      if (isAlreadyInBundle) {
        const updatedPayload = bundleData.map((choco) => {
          if (choco.id === selectedItem.id) {
            return { ...choco, quantity: choco.quantity + 1 };
          }
          return choco;
        });
        const updatedData = setData(updatedPayload);
        card(updatedData);
        return;
      }

      const updatedData = setData([...bundleData, selectedItem]);
      card(updatedData);
    });
  });
};
