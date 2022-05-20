import initFetch from "./modules/fetch-bitcoin.js";
import initFetchUSD from "./modules/fetch-bitcoin-usd.js";
import initFetchEUR from "./modules/fetch-bitcoin-eur.js";
import initFetchBRL from "./modules/fetch-bitcoin-brl.js";
import initCalcMoeda from "./modules/calc-moeda.js";

initFetch();
initFetchUSD();
initFetchEUR();
initFetchBRL();
initCalcMoeda();
