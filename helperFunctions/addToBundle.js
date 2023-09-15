import { store } from "./redux";

export const addToBundle = (element) => {
  element.forEach((button) => {
    button.addEventListener("click", function (event) {
      const itemJSON = event.target.getAttribute("data-item");
      const selectedItem = JSON.parse(decodeURIComponent(itemJSON));

      const bundleData = store.getState();

      let totalItem = 0;
      bundleData.forEach((chocol) => (totalItem = totalItem + chocol.quantity));
      if (totalItem >= 8) {
        Toastify({
          text: "Cannot add Item , Bundle can only contain 8 items",
          duration: 2000,
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "#000",
            color: "#fff",
            borderRadius: "8px",
          },
        }).showToast();
        return;
      }
      const isAlreadyInBundle = bundleData.some(
        (chocolate) => chocolate.id === selectedItem.id
      );
      // console.log(isAlreadyInBundle);

      if (isAlreadyInBundle) {
        const updatedPayload = bundleData.map((choco) => {
          if (choco.id === selectedItem.id) {
            return { ...choco, quantity: choco.quantity + 1 };
          }
          return choco;
        });
        const payload = updatedPayload;
        store.dispatch({ type: "UPDATE", payload: payload });
        Toastify({
          text: "Item added successfully",
          duration: 2000,
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "#000",
            color: "#fff",
            borderRadius: "8px",
          },
        }).showToast();
        return;
      }

      console.log(bundleData);

      const payload = [...bundleData, selectedItem];
      store.dispatch({ type: "UPDATE", payload: payload });
      Toastify({
        text: "Item added successfully",
        duration: 2000,
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
