export default function initCalcMoeda() {}

fetch("https://blockchain.info/ticker")
  .then((r) => r.json())
  .then((bitcontValor) => {
    const valor = document.querySelector(".form-valor input");
    const valorName = document.querySelector("#name");
    const valorSelect = document.querySelectorAll(".form-valor select");
    let valorCompra = document.querySelector(".btc-valor-compra");
    valor.addEventListener("change", handleChange);
    valorSelect.forEach((item) => {
      item.addEventListener("change", handleChangeSelect);
    });

    console.log(bitcontValor.BRL.symbol);

    let bitcont = bitcontValor.USD.sell;
    valorCompra.innerHTML = `<span data-simbolo>$</span> ${bitcont}`;

    function handleChange(event) {
      const valorMoeda = event.target.value;
      const valorFinal = (valorMoeda / bitcont).toFixed(6);
      valorCompra.innerHTML = `<span data-simbolo>$</span> ${valorFinal}`;
    }

    async function handleChangeSelect(event) {
      const valorMoedaSelect = event.target.value;
      const valorInputSelect = +valorName.value;
      function valorFinal() {
        if (valorMoedaSelect === "1") {
          bitcont = (valorInputSelect / +bitcontValor.USD.sell).toFixed(6);
        } else if (valorMoedaSelect === "2") {
          bitcont = (valorInputSelect / +bitcontValor.EUR.sell).toFixed(6);
        } else if (valorMoedaSelect === "3") {
          bitcont = (valorInputSelect / +bitcontValor.BRL.sell).toFixed(6);
        }
      }
      valorFinal();
      valorCompra.innerHTML = `<span data-simbolo>$</span> ${bitcont}`;
      console.log(bitcont, valorInputSelect);
    }
  });
