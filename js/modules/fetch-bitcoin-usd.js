export default function initFetchUSD() {}

fetch("https://blockchain.info/ticker")
  .then((r) => r.json())
  .then((bitcoin) => {
    const selecto = document.querySelector("#slc");
    const btcCotacaoUSD = document.querySelector("[data-btc='USD']");
    // btcCotacaoUSD.innerHTML = bitcoin.USD.sell;
  });
