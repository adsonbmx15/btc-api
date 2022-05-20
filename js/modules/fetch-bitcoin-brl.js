export default function initFetchBRL() {}

fetch("https://blockchain.info/ticker")
  .then((r) => r.json())
  .then((bitcoin) => {
    const selecto = document.querySelector("#slc");
    const btcCotacaoBRL = document.querySelector("[data-btc='BRL']");
    // btcCotacaoBRL.innerHTML = bitcoin.BRL.sell;
  });
