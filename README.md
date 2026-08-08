# Портфолио Дмитрия Фадеева

[Открыть сайт](https://nefrit333-cpu.github.io/dmitry-fadeev-portfolio/)

Статический Astro-сайт с портфолио Project Manager IT-проектов. Главная задача сайта - быстро показать работодателю проектный фокус, ключевые кейсы, рабочие артефакты и дополнительный технический слой через GitHub-проекты.

## Текущая версия

Финальная локально проверенная версия: `v1.3.0`.

Что вошло:

- Figma-inspired темный визуальный стиль с крупной типографикой и оранжевым акцентом;
- короткий hero без портрета, с фокусом на роли `Project Manager IT-проектов`;
- блок «Обо мне» с новым editorial-портретом, метриками и компактным подтверждением IT-подхода;
- объединенный блок «Ключевые кейсы»: WID, W3Promo и Pixel Runner;
- визуальные карточки PM-артефактов: roadmap, backlog, QA checklist, ТЗ и структура страниц;
- отдельный мини-блок GitHub-проектов;
- контактный блок с Email, VK и скрытой формой связи;
- адаптивная верстка под desktop и современные мобильные экраны.

Подробная история изменений: [CHANGELOG.md](CHANGELOG.md).

## Стек

- Astro;
- TypeScript;
- CSS без UI-фреймворка;
- GitHub Pages;
- FormSubmit для отправки формы.

## Локальный запуск

```bash
npm.cmd install
npm.cmd run dev -- --host 127.0.0.1 --port 4324
```

Локальный адрес:

```text
http://127.0.0.1:4324/dmitry-fadeev-portfolio/
```

Проверка и сборка:

```bash
npm.cmd run build
```

## Структура

```text
src/pages/index.astro          Главная страница
src/pages/privacy.astro        Политика конфиденциальности
src/pages/consent.astro        Согласие на обработку данных
src/styles/global.css          Визуальная система и адаптив
src/data/profile.ts            Профиль, ссылки, кейсы, артефакты и контакты
public/images/                 Изображения сайта
public/docs/                   PDF-документы
.github/workflows/deploy.yml   Публикация на GitHub Pages
```

## Публикация

Сайт настроен под репозиторий `dmitry-fadeev-portfolio` и базовый путь `/dmitry-fadeev-portfolio`.

После пуша в `master` GitHub Actions собирает Astro-проект и публикует его на GitHub Pages.

Публичный адрес:

```text
https://nefrit333-cpu.github.io/dmitry-fadeev-portfolio/
```
