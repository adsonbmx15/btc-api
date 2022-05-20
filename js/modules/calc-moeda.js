export default function initCalcMoeda() {}

const valor = document.querySelector(".form-valor input");
const valorName = document.querySelector("#name");
const valorSelect = document.querySelectorAll(".form-valor select");
let valorCompra = document.querySelector(".btc-valor-compra");
valor.addEventListener("change", handleChange);
valorSelect.forEach((item) => {
  item.addEventListener("change", handleChangeSelect);
});

let bitcont = 10000;

function handleChange(event) {
  const valorMoeda = event.target.value;
  const valorFinal = valorMoeda / bitcont;
  valorCompra.innerHTML = `<span data-simbolo>$</span>${valorFinal}`;
}

async function handleChangeSelect(event) {
  const valorMoedaSelect = event.target.value;
  const valorInputSelect = +valorName.value;
  function valorFinal() {
    if (valorMoedaSelect === "1") {
      bitcont = (valorInputSelect / 100000).toFixed(6);
    } else if (valorMoedaSelect === "2") {
      bitcont = (valorInputSelect / 200000).toFixed(6);
    } else if (valorMoedaSelect === "3") {
      bitcont = (valorInputSelect / 300000).toFixed(6);
    }
  }
  valorFinal();
  valorCompra.innerHTML = `<span data-simbolo>$</span>${bitcont}`;
  console.log(bitcont, valorInputSelect);
}
