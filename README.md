# Портфолио Дмитрия Фадеева

[Открыть сайт](https://nefrit333-cpu.github.io/dmitry-fadeev-portfolio/)

Статический сайт-портфолио Project Manager для digital, B2B и fashion-tech проектов.

Сайт собран на Astro и публикуется через GitHub Pages. Внутри: краткое позиционирование, опыт, кейсы, образование, навыки, публичные GitHub-репозитории и форма обращения без перехода в почтовый клиент.

## Что внутри

- премиальный одностраничный интерфейс;
- кейсы по WID, Pixel Runner, CafeMam, TTS Kazan и IZMTEH;
- коллекции контента Astro для опыта и проектов;
- адаптивная верстка для desktop и mobile;
- контактная форма с локальной валидацией и отправкой через FormSubmit;
- GitHub Pages workflow для автоматической публикации.

## Стек

- Astro;
- TypeScript;
- CSS без UI-фреймворка;
- Astro Content Collections;
- GitHub Pages.

## Локальный запуск

```bash
npm.cmd install
npm.cmd run dev
```

По умолчанию локальный адрес разработки:

```text
http://127.0.0.1:4323/dmitry-fadeev-portfolio/
```

Сборка:

```bash
npm.cmd run build
```

Локальная проверка production-сборки:

```bash
npm.cmd run preview
```

## Структура

```text
src/pages/index.astro          Главная страница
src/styles/global.css          Визуальная система и адаптив
src/data/profile.ts            Основные данные профиля
src/content/experience/*.md    Опыт
src/content/projects/*.md      Кейсы
public/images/                 Изображения
.github/workflows/deploy.yml   Публикация на GitHub Pages
```

## Публикация

Сайт настроен под репозиторий `dmitry-fadeev-portfolio` и базовый путь `/dmitry-fadeev-portfolio`.

После пуша в `master` GitHub Actions собирает Astro-проект и публикует его на GitHub Pages.

Публичный адрес после успешного workflow:

```text
https://nefrit333-cpu.github.io/dmitry-fadeev-portfolio/
```

Форма связи отправляет данные на email через FormSubmit. Для первой реальной отправки сервис может попросить подтвердить адрес получателя.
