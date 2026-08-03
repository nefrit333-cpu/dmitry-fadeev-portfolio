# Портфолио Дмитрия Фадеева

[Открыть сайт](https://nefrit333-cpu.github.io/dmitry-fadeev-portfolio/)

Статический сайт-портфолио Project Manager для digital-, B2B- и fashion-tech проектов. Сайт показывает опыт, кейсы, проектные артефакты, диплом Яндекс Практикума, публичные пет-проекты и форму связи.

## Текущая версия

Актуальный релиз: `v1.2.0`.

Что вошло в релиз:

- более лаконичный первый экран с сильным CTA;
- обновленный мобильный хедер с вкладкой «Мои проекты»;
- прямое открытие PDF диплома без Яндекс Диска;
- объединенный блок «Опыт и кейсы» без дублей;
- кейсы WID, Pixel Runner, CafeMam, TTS Kazan, IZMTEH и Яндекс Практикум;
- отдельный блок проектных артефактов с прямыми ссылками на Google Drive;
- форма связи с валидацией, согласием на обработку данных и отправкой через FormSubmit;
- страницы политики конфиденциальности и согласия на обработку персональных данных;
- адаптивная верстка для разных мобильных экранов.

Подробная история изменений: [CHANGELOG.md](CHANGELOG.md).

## Стек

- Astro;
- TypeScript;
- Astro Content Collections;
- CSS без UI-фреймворка;
- GitHub Pages;
- FormSubmit для отправки формы.

## Локальный запуск

```bash
npm.cmd install
npm.cmd run dev -- --host 127.0.0.1 --port 4323
```

Локальный адрес:

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

## Структура проекта

```text
src/pages/index.astro          Главная страница
src/pages/privacy.astro        Политика конфиденциальности
src/pages/consent.astro        Согласие на обработку данных
src/styles/global.css          Визуальная система и адаптив
src/data/profile.ts            Основные данные профиля, ссылки и артефакты
src/content/experience/*.md    Опыт
src/content/projects/*.md      Кейсы
public/images/                 Изображения
public/docs/                   PDF-документы, доступные с сайта
.github/workflows/deploy.yml   Публикация на GitHub Pages
```

## Контент

Опыт и кейсы хранятся в Astro Content Collections. Для нового кейса нужно заполнить `title`, `category`, `role`, `order`, `stack`, `links` и `outcomes`. Основные контакты, метрики, навыки, диплом, ссылки на артефакты и публичные проекты находятся в `src/data/profile.ts`.

## Публикация

Сайт настроен под репозиторий `dmitry-fadeev-portfolio` и базовый путь `/dmitry-fadeev-portfolio`.

После пуша в `master` GitHub Actions собирает Astro-проект и публикует его на GitHub Pages.

Публичный адрес:

```text
https://nefrit333-cpu.github.io/dmitry-fadeev-portfolio/
```

## Проверка перед релизом

Перед публикацией обязательно запустить:

```bash
npm.cmd run build
```

Для UI-изменений дополнительно проверяются desktop и mobile viewport: отсутствие горизонтального скролла, читаемость карточек, работа формы, переключатель темы и корректность ссылок.
