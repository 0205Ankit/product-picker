import { fetchData, setData } from "./addToBundle";
import { card } from "./card";

export const removeFromBundle = (element) => {
  element.forEach((button) => {
    button.addEventListener("click", function (event) {
      const itemJSON = event.target.getAttribute("data-item");
      const selectedItem = JSON.parse(decodeURIComponent(itemJSON));

      const bundleData = fetchData();

      if (selectedItem.quantity > 1) {
        const reducedPayload = bundleData.map((choco) => {
          if (choco.id === selectedItem.id) {
            return { ...choco, quantity: choco.quantity - 1 };
          }
          return choco;
        });

        const updatedData = setData(reducedPayload);
        card(updatedData);
        return;
      }

      const filterPayload = bundleData.filter(
        (choco) => choco.id !== selectedItem.id
      );

      const updatedData = setData(filterPayload);
      card(updatedData);
    });
  });
};
