const fs = require('fs');

const DATA = 'data/products.json';
const PAGE = 'index.html';
const START = '<!-- cards:start -->';
const END = '<!-- cards:end -->';

function readProducts(path) {
  try {
    const raw = fs.readFileSync(path, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    console.error('помилка: файл відсутній або пошкоджений ' + path);
    process.exit(1);
  }
}

function renderCard(p) {
  return `<article class="product-card">
  <div class="product-image-box">
    <span class="product-tag">${p.tag}</span>
    <img src="${p.image}" alt="${p.title}">
  </div>
  <div class="product-info">
    <h3 class="product-title">${p.title}</h3>
    <p class="product-desc">${p.description}</p>
  </div>
  <div class="product-footer">
    <div class="product-price-box">
      <span class="price-label">Вартість</span>
      <span class="product-price">${p.price}</span>
    </div>
    <button type="button" class="add-btn" aria-label="Додати до кошика">
      <img src="icons/plus.svg" alt="">
    </button>
  </div>
</article>`;
}

function inject(html, cards) {
  const s = html.indexOf(START);
  const e = html.indexOf(END);
  if (s === -1 || e === -1) {
    console.error('не знайдено маркери в index.html');
    process.exit(1);
  }
  return html.slice(0, s + START.length) + '\n' + cards + '\n' + html.slice(e);
}

const products = readProducts(DATA);
const cards = products.map(renderCard).join('\n');
const html = fs.readFileSync(PAGE, 'utf8');
fs.writeFileSync(PAGE, inject(html, cards));
console.log('згенеровано карток: ' + products.length);
