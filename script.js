const url1 = "./data.json";

async function fetchData(url) {
  try {
    const responce = await fetch(url);
    const data = await responce.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchData(url1);

  const wrapperEl = document.querySelector(".cards__wrapper");

  data.forEach((element) => {
    wrapperEl.insertAdjacentHTML(
      "beforeend",
      `
          <div class="cards__item">
                <div class="item-img" style="background-image: ${element.img}">
                    <div class="item-img__hover">
                        <button class="item-img__hover-btn">${element.button}</button>
                    </div>
                </div>
                <div class="item-description">
                    <h4 class="item-title">${element.h4}</h4>
                    <p class="item-text">${element.paragraph}
                    </p>
                    <p class="item-price">${element.price}</p>
                </div>
          </div>
            
        `
    );
  });
});
