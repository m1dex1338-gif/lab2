# Лабораторна робота 2: npm, Sass, Node.js

Навчальний проєкт WorkHub.

## Середовище розробки

- Node.js: `v24.13.0`
- npm: `11.6.2`

## Модульна система

Обрано **CommonJS** (`require`), оскільки це стандартний і найпростіший варіант для утилітарних скриптів збірки під Node.js.

## Команди

- `npm run build` — повна збірка проєкту (картки + стилі).
- `npm run build:cards` — генерація карток товарів з `data/products.json` в `index.html`.
- `npm run scss:build` — компіляція `src/scss/main.scss` у стиснутий `css/style.css`.
- `npm run scss:watch` — автокомпіляція стилів при зміні `.scss` файлів.

## Збірка з нуля

```bash
npm install
npm run build
```

## Структура

```text
lab2/
├── index.html
├── css/
│   └── style.css
├── src/
│   └── scss/
│       ├── main.scss
│       ├── _variables.scss
│       └── _mixins.scss
├── data/
│   └── products.json
├── scripts/
│   └── build-cards.js
├── icons/
├── products/
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Посилання

- Репозиторій: https://github.com/m1dex1338-gif/lab2
- GitHub Pages: https://m1dex1338-gif.github.io/lab2/
