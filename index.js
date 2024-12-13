// // Sao Paulo
// const saoPaulo = document.querySelector("#sao");
// const saoPauloDate = saoPaulo.querySelector(".date");
// const saoPauloTime = saoPaulo.querySelector(".time");
// const saoPauloHora = moment();
// saoPauloDate.innerHTML = moment().format("Do MMMM YYYY");
// saoPauloTime.innerHTML = `${saoPauloHora.format("h:mm:ss")}`;

// //Paris
// const paris = document.querySelector("#paris");
// const parisDate = paris.querySelector(".date");
// const parisTime = paris.querySelector(".time");
// const parisHora = moment().tz("Europe/Paris");
// parisDate.innerHTML = moment().format("Do MMMM YYYY");
// parisTime.innerHTML = `${parisHora.format("h:mm:ss")}`;

// //Select City
// // const citySelect = document.getElementById("city");
// // const timeDisplay = document.getElementById("timeDisplay");

// // citySelect.addEventListener("change", function () {
// //   let timezone = citySelect.value;
// //   let time;

// //   if (timezone === "current") {
// //     time = moment(); // hora local do usuário
// //   } else if (timezone) {
// //     time = moment.tz(timezone); // hora na cidade selecionada
// //   } else {
// //     timeDisplay.innerHTML = ""; // limpa o display se nada estiver selecionado
// //     return;
// //   }

// //   // Exibe a hora formatada
// //   timeDisplay.innerHTML = `Hora: ${time.format("HH:mm:ss")} em ${timezone}`;
// // });

// function updateCity(event) {
//   let cityTimeZone = event.target.value;
//   let cityTime = moment().tz(cityTimeZone);
//   let citiesElement = document.querySelector("#city");
//   citiesElement.innerHTML = `

//         <div>
//           <div>
//             <h2>${cityTimeZone}</h2>
//             <div class="date">${cityTime.format("Do MMMM YYYY")}</div>
//           </div>
//           <div class="time">${cityTime.format("h:mm:ss")}</div>
//         </div>

//   `;
// }

// const citiesSelectElement = document.querySelector("#citySelect");
// cic;
// citiesSelectElement.addEventListener("change", updateCity);

function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM	Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM	Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
    </div>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
