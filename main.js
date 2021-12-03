const radioChannel = document.querySelector(".radio-channel");
const radioFooterContent = document.querySelector(".radio-footer");

fetch("https://teclead.de/recruiting/radios")
  .then(response => response.json())
  .then((data) => {
    data.radios.forEach((radio) => {
      const radioContent = `
      <div class="radios">
        <div class="radio">
          <h3 class="name">${radio.name}</h3>
          <h3 class="frequency">${radio.frequency}</h3>
        </div>
        <div class="radio-image image-hide">
          <i class="fas fa-minus-circle"></i>
          <img src="${radio.image}">
          <i class="fas fa-plus-circle"></i>
        </div>
      </div>`;

      const footerContent = `
      <div class="radio-footer image-hide">
        <h4>CURRENTLY PLAYING</h4>
        <p>${radio.name}</p>
      </div>`;

      radioChannel.insertAdjacentHTML("beforeend", radioContent);
      radioFooterContent.insertAdjacentHTML("beforeend", footerContent)
    });
  });
