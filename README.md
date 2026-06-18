<div align="center">

# 🎬 Sakh TV — tvsakh.com

**Кинематографичный лендинг стримингового сервиса, собранный на [Astro](https://astro.build).**

Статический вывод, мгновенная загрузка, дизайн в стиле *aurora mesh + glassmorphism*.
Без рекламы, без лишних зависимостей, без runtime-фреймворков.

[![Astro](https://img.shields.io/badge/Astro-6.x-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Деплой](https://img.shields.io/badge/production-live-22c55e)](https://tvsakh.com)
[![Размер dist](https://img.shields.io/badge/bundle-статика-7c5cff)](#)

</div>

---

## ✨ О проекте

**Sakh TV (Сах ТВ)** — стриминговый сервис для просмотра фильмов и сериалов в HD-качестве.
Этот репозиторий — посадочная страница сервиса ([tvsakh.com](https://tvsakh.com)):
рассказ о возможностях, отзывы, инструкция, FAQ и тарифы.

- 🎯 **One-page лендинг** — 9 секций, плавный скролл, активная навигация.
- 🎨 **Кинематографичный дизайн** — aurora-орбы, стекло (glassmorphism), film-grain, неоновые акценты.
- ⚡ **Максимальная скорость** — статический HTML, инлайн CSS, prefetch по viewport, ноль JS-фреймворков.
- 📱 **PWA** — манифест, иконки, theme-color, устанавливается на домашний экран.
- 🔍 **SEO** — Open Graph, Twitter Cards, JSON-LD (SoftwareApplication, WebSite, Organization).
- ♿ **Доступность** — `prefers-reduced-motion`, ARIA-атрибуты, семантическая разметка.
- 📺 **Платформы** — Android, iOS, Apple TV, Android TV.

---

## 🧱 Технологии

| Слой        | Выбор                                                        |
|-------------|--------------------------------------------------------------|
| Фреймворк   | **Astro 6** (static output, `compressHTML`, prefetch)        |
| Язык        | **TypeScript** (строгая типизация в island-скриптах)         |
| Стили       | Собственный CSS, дизайн-токены в `global.css`                |
| Сборка      | `astro build` → `dist/` (чистый статический сайт)            |
| Деплой      | `rsync` поверх SSH → продакшен (`deploy.sh`)                 |

> Никаких React, Vue, Tailwind или UI-китов — только Astro и нативный CSS.

---

## 📂 Структура

```
tvsakh.com/
├── astro.config.mjs        # конфиг Astro (site, prefetch, image)
├── deploy.sh               # деплой на продакшен по SSH (rsync)
├── public/
│   ├── img/                # скриншоты интерфейса и шаги инструкции
│   ├── favicon.svg         # маска для mask-icon
│   ├── site.webmanifest    # PWA-манифест
│   └── *.{ico,png}         # иконки для разных платформ
├── src/
│   ├── layouts/
│   │   └── Layout.astro     # <head>: мета, OG, Twitter, JSON-LD, favicons
│   ├── pages/
│   │   └── index.astro      # сборка страницы + клиентский JS
│   ├── components/
│   │   ├── Nav.astro        # навигация с реакцией на скролл + моб. меню
│   │   ├── Hero.astro       # первый экран с анимированным «экраном»
│   │   ├── FreeTrial.astro  # призыв к бесплатному периоду
│   │   ├── Features.astro   # преимущества (bento-сетка)
│   │   ├── Reviews.astro    # отзывы + рейтинг
│   │   ├── Instructions.astro  # инструкция по установке с табами
│   │   ├── FAQ.astro        # аккордеон вопросов
│   │   ├── Pricing.astro    # тарифные планы
│   │   └── Footer.astro     # подвал
│   └── styles/
│       └── global.css       # дизайн-система: токены, утилиты, анимации
├── bot/                     # материалы для Telegram-бота (скриншоты, md)
└── package.json
```

---

## 🚀 Быстрый старт

```bash
# 1. Установка зависимостей
npm install

# 2. Локальная разработка (http://localhost:4321)
npm run dev

# 3. Сборка в dist/
npm run build

# 4. Предпросмотр собранной версии
npm run preview
```

### Скрипты `package.json`

| Команда           | Действие                                   |
|-------------------|--------------------------------------------|
| `npm run dev`     | Дев-сервер с HMR                           |
| `npm run build`   | Продакшен-сборка → `dist/`                 |
| `npm run preview` | Локальный предпросмотр `dist/`             |
| `npm run astro`   | Прямой доступ к CLI Astro                  |

---

## 🌐 Деплой на продакшен

Деплой идёт по SSH-ключу через `rsync` — скрипт [`deploy.sh`](./deploy.sh):

```bash
./deploy.sh                # сборка + деплой
./deploy.sh --dry-run      # пробный прогон без записи
./deploy.sh --no-build     # деплой уже собранного dist/
./deploy.sh --no-delete    # не удалять старые файлы на сервере
./deploy.sh --check        # только проверить SSH-соединение
SSH_PORT=2222 ./deploy.sh  # нестандартный порт
```

Подробности — в комментарии в начале `deploy.sh`.

---

## 🎨 Дизайн-система

Палитра и токены живут в [`src/styles/global.css`](./src/styles/global.css).
Ключевые переменные:

```css
--bg-0: #060509;            /* глубокий тёмный фон            */
--neon-violet:  #7c5cff;    /* кино-неон, акценты             */
--neon-fuchsia: #ff4d9d;
--neon-amber:   #ffb347;
--neon-cyan:    #38e8ff;
--grad-accent: linear-gradient(135deg, var(--neon-violet), var(--neon-fuchsia), var(--neon-amber));
--glass: rgba(255, 255, 255, 0.035);   /* стекло для карточек */
```

Стиль — «сливки трендов 2026»: aurora mesh, glassmorphism, film grain, bento-сетки.

---

## ⌨️ Клиентский JS

Весь интерактив — vanilla TypeScript прямо в `index.astro` (≈100 строк):

- реакция навигации на скролл;
- мобильное меню с `Escape` и блокировкой прокрутки;
- появление блоков через `IntersectionObserver`;
- scroll-spy для активной ссылки;
- табы инструкции;
- плавный скролл с учётом фиксированной навигации.

Никаких библиотек — нативный браузерный API.

---

## 📊 Производительность

- **Статический HTML** — сервер отдаёт готовые файлы, ноль рантайма.
- `compressHTML` + `inlineStylesheets: 'auto'` — меньше сетевых запросов.
- `prefetchAll` со стратегией `viewport` — ссылки подгружаются заранее.
- `image.responsiveStyles: true` — адаптивные картинки.
- Изображения — `loading="eager"` только для Hero, остальное ленивое.

---

## 🔗 Полезные ссылки

- 🌍 **Сайт:** [tvsakh.com](https://tvsakh.com)
- 🎞️ **Сервис:** [sakhtv.club](https://sakhtv.club)
- 💬 **Telegram-чат:** [@sakhtvchat](https://t.me/sakhtvchat)
- 🤖 **Telegram-бот:** [@sakhtvandroid](https://t.me/sakhtvandroid)
- ✉️ **Поддержка:** support@sakh.tv

---

## 📄 Лицензия

Проект является собственностью правообладателя. Использование кода — по согласованию.

<div align="center">

<sub>Сделано с ❤️ на Astro · tvsakh.com</sub>

</div>
