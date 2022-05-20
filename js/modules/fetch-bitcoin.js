export default function initFetch() {}

fetch("https://blockchain.info/ticker")
  .then((r) => r.json())
  .then((bitcoin) => {
    const selecto = document.querySelector("#slc");
    const btcPreco = document.querySelector("[data-btc]");
    // btcPreco.innerHTML = bitcoin.USD.sell;
    function changeSelecao(index) {
      const indexSelecao = index.target.selectedIndex;

      function selecionado() {
        let select = document.querySelector("#slc");
        let optionSelecionado = select.options[`${indexSelecao}`];
        let value = optionSelecionado.value;

        if (value === "1") {
          btcPreco.innerHTML = bitcoin.USD.sell;
          console.log("1");
        } else if (value === "2") {
          btcPreco.innerHTML = bitcoin.BRL.sell;
          console.log("2");
        } else if (value === "3") {
          btcPreco.innerHTML = bitcoin.EUR.sell;
          console.log("3");
        }
      }
      selecionado();
    }
    selecto.addEventListener("change", changeSelecao);
  });
