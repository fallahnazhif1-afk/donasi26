const sheetID =
"1PGTh6Qhos_CsqnRjDbKzaPiZV4vTXoMjBGuXWuMTMe4";

const url =
`https://opensheet.elk.sh/${sheetID}/donasi`;

fetch(url)

.then(res => res.json())

.then(data => {

  let total = 0;

  data.forEach(item => {

    total += Number(item.Nominal);

  });

  let target = 15000000;

  let persen =
  (total / target) * 100;

  document.getElementById("total")
  .innerHTML =
  "Rp " + total.toLocaleString();

  document.getElementById("persen")
  .innerHTML =
  persen.toFixed(1) + "% Tercapai";

  document.getElementById("fill")
  .style.width =
  persen + "%";

});
