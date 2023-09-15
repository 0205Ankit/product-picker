import { createStore } from "redux";
import { addToBundle } from "./addToBundle";
import { removeFromBundle } from "./removeFromBundle";

export const redux = () => {
  function bundleData(state = [], action) {
    switch (action.type) {
      case "UPDATE":
        return (state = action.payload);
      default:
        return state;
    }
  }

  const store = createStore(bundleData);

  function render() {
    const data = store.getState();

    const totalAmount = data
      .map((item) => item.quantity * +item.price)
      .reduce((acc, i) => acc + i, 0);

    document.querySelector(".card_container").innerHTML = `
        <div class="info_text_box">
            ${
              data.length === 0
                ? `<div>
                  <p class="info_text">
                    Create Your Bundle
                  </p>
                  <p class="info_text">
                    by adding the items from the Collection
                  </p>
                </div>`
                : `<div>
                  <div class="card_container">
                    <span>
                      Your Bundle
                    </span>
                    <span>
                      Total : ${totalAmount} ₹
                    </span>
                  </div>
                  ${data
                    .map((item, index) => {
                      const itemJSON = encodeURIComponent(JSON.stringify(item));
                      return `<div key=${index} class="card">
                        <div class="product_info">
                          <img src="${item.image}"/>
                          <div>
                            <h6>
                              ${item.name}
                            </h6>
                            <p>
                              ₹ ${item.price}.00
                              <span>
                                (per ${item.size})
                              </span>
                            </p>
                          </div>
                        </div>
                        <div class="actions_container">
                          <button class="add-to-bundle" data-item="${itemJSON}">
                            +
                          </button>
                          <span>
                            ${item.quantity}
                          </span>
                          <button class="remove-from-bundle" data-item="${itemJSON}">
                            -
                          </button>
                        </div>
                      </div>`;
                    })
                    .join("")}
                </div>`
            }
        </div>
    `;
    if (data.length > 0) {
      const addButtons = document.querySelectorAll(".add-to-bundle");
      addToBundle(addButtons);

      const removeButtons = document.querySelectorAll(".remove-from-bundle");
      removeFromBundle(removeButtons);
    }
  }

  render();
  store.subscribe(render);

  return store;
};

export const store = redux();
