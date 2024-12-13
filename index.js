const saoPaulo = document.querySelector("#sao");
const saoPauloDate = saoPaulo.querySelector(".date");
const saoPauloTime = saoPaulo.querySelector(".time");
const saoPauloHora = moment();
saoPauloDate.innerHTML = moment().format("MMMM Do YYYY");
saoPauloTime.innerHTML = `${saoPauloHora.format("h:mm:ss")}`;
const beloHorizonte = document.querySelector("#belo");
