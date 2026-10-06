const models = [
  {label:'O(1)', name:'Constant', color:'#08715c', value:n=>1},
  {label:'O(log n)', name:'Halving', color:'#0052cc', value:n=>Math.log2(n)},
  {label:'O(n)', name:'One scan', color:'#6b42b5', value:n=>n},
  {label:'O(n log n)', name:'Split + combine', color:'#aa4600', value:n=>n*Math.log2(n)},
  {label:'O(n²)', name:'Every pair', color:'#b62042', value:n=>n*n},
];
export function renderGrowthOutput(n = 8) {
  const max = n*n;
  return `<svg viewBox="0 0 640 250" role="img" aria-label="Illustrative work counts at input size ${n}. Constant: 1; logarithmic: ${Math.log2(n).toFixed(1)}; linear: ${n}; n log n: ${(n*Math.log2(n)).toFixed(1)}; quadratic: ${max}.">
    <text x="170" y="20" fill="currentColor" font-size="14">Relative work (bar lengths use a linear scale)</text>
    ${models.map((m,i)=>{const y=40+i*40; const count=m.value(n);return `<text x="0" y="${y+19}" fill="currentColor" font-size="16">${m.label}</text><rect x="170" y="${y}" width="${Math.max(2,count/max*350)}" height="26" rx="5" fill="${m.color}"/><text x="535" y="${y+19}" fill="currentColor" font-size="16">${Number.isInteger(count)?count:count.toFixed(1)}</text>`}).join('')}
  </svg><table class="growth-table"><caption>Illustrative operation counts at n = ${n}</caption><thead><tr><th scope="col">Pattern</th><th scope="col">Work at n</th><th scope="col">Work at 2n</th></tr></thead><tbody>${models.map(m=>`<tr><th scope="row">${m.label} · ${m.name}</th><td>${Math.round(m.value(n)*10)/10}</td><td>${Math.round(m.value(n*2)*10)/10}</td></tr>`).join('')}</tbody></table>`;
}
export function renderGrowthLab({open = false} = {}) {
  return `<details class="learning-disclosure growth-lab" ${open?'open':''}><summary>Explore how work grows with input size</summary><p>Big O describes growth, not execution time. These formulas illustrate common patterns; use this lesson’s complexity notes for its actual assumptions.</p><label class="growth-control">Input size n <input type="range" min="2" max="64" value="8" data-growth-size aria-label="Input size for growth comparison"/><output data-growth-value>8</output></label><div data-growth-output>${renderGrowthOutput()}</div><p class="learning-caption">The formulas ignore constant factors. Fractional logarithmic counts are a mathematical model, not a literal number of program steps.</p></details>`;
}
export function renderGlossary(page, escapeHtml) {
  const guide=page.learningGuide;
  if(!guide) return '';
  return `<details class="learning-disclosure"><summary>Words you’ll see in this lesson</summary><dl class="learning-glossary">${guide.terms.map(([term,meaning])=>`<div><dt>${escapeHtml(term)}</dt><dd>${escapeHtml(meaning)}</dd></div>`).join('')}</dl></details>`;
}
