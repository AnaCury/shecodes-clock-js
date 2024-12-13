// Sao Paulo
const saoPaulo = document.querySelector("#sao");
const saoPauloDate = saoPaulo.querySelector(".date");
const saoPauloTime = saoPaulo.querySelector(".time");
const saoPauloHora = moment();
saoPauloDate.innerHTML = moment().format("Do MMMM YYYY");
saoPauloTime.innerHTML = `${saoPauloHora.format("h:mm:ss")}`;

//Paris
const paris = document.querySelector("#paris");
const parisDate = paris.querySelector(".date");
const parisTime = paris.querySelector(".time");
const parisHora = moment().tz("Europe/Paris");
parisDate.innerHTML = moment().format("Do MMMM YYYY");
parisTime.innerHTML = `${parisHora.format("h:mm:ss")}`;

//Select City
const citySelect = document.getElementById("city");
const timeDisplay = document.getElementById("timeDisplay");

citySelect.addEventListener("change", function () {
  let timezone = citySelect.value;
  let time;

  if (timezone === "current") {
    time = moment(); // hora local do usuário
  } else if (timezone) {
    time = moment.tz(timezone); // hora na cidade selecionada
  } else {
    timeDisplay.innerHTML = ""; // limpa o display se nada estiver selecionado
    return;
  }

  // Exibe a hora formatada
  timeDisplay.innerHTML = `Hora: ${time.format("HH:mm:ss")} em ${timezone}`;
});
