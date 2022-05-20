export default function initFetchEUR() {}

fetch("https://blockchain.info/ticker")
  .then((r) => r.json())
  .then((bitcoin) => {
    const selecto = document.querySelector("#slc");
    const btcCotacaoEUR = document.querySelector("[data-btc='EUR']");
    // btcCotacaoEUR.innerHTML = bitcoin.EUR.sell;
  });
