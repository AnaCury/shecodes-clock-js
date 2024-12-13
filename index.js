const saoPaulo = document.querySelector("#sao");
const saoPauloDate = saoPaulo.querySelector(".date");
const saoPauloTime = saoPaulo.querySelector(".time");
const saoPauloHora = moment();
saoPauloDate.innerHTML = moment().format("Do MMMM YYYY");
saoPauloTime.innerHTML = `${saoPauloHora.format("h:mm:ss")}`;

let parisElement = document.querySelector("#paris");
if (parisElement) {
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("Do MMMM YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss");
}
