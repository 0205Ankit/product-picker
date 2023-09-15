import { store } from "./redux";

export const removeFromBundle = (element) => {
  element.forEach((button) => {
    button.addEventListener("click", function (event) {
      const itemJSON = event.target.getAttribute("data-item");
      const selectedItem = JSON.parse(decodeURIComponent(itemJSON));

      const bundleData = store.getState();

      if (selectedItem.quantity > 1) {
        const reducedPayload = bundleData.map((choco) => {
          if (choco.id === selectedItem.id) {
            return { ...choco, quantity: choco.quantity - 1 };
          }
          return choco;
        });

        store.dispatch({ type: "UPDATE", payload: reducedPayload });
        Toastify({
          text: "Item removed successfully",
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            //   background: "linear-gradient(to right, #00b09b, #96c93d)",
            background: "#000",
            color: "#fff",
            borderRadius: "8px",
          },
        }).showToast();
        return;
      }

      const filterPayload = bundleData.filter(
        (choco) => choco.id !== selectedItem.id
      );

      store.dispatch({ type: "UPDATE", payload: filterPayload });
      Toastify({
        text: "Item removed successfully",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          //   background: "linear-gradient(to right, #00b09b, #96c93d)",
          background: "#000",
          color: "#fff",
          borderRadius: "8px",
        },
      }).showToast();
    });
  });
};
