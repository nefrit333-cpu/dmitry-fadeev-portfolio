export const profile = {
  name: "Дмитрий Фадеев",
  role: "Project Manager",
  location: "Москва",
  headline:
    "Project Manager в digital, B2B и fashion-tech проектах: веду работу от требований и бэклога до сроков, бюджета, качества и понятной коммуникации.",
  summary:
    "5+ лет в клиентских и IT-проектах. Сильная зона - структурировать неопределенность, собирать требования, держать команду в едином контуре и доводить задачи до запуска.",
  email: "nefrit333@gmail.com",
  telegram: "https://t.me/dmitriy_fadeev1809",
  telegramLabel: "@dmitriy_fadeev1809",
  metrics: [
    { value: "5+ лет", label: "проектного и клиентского опыта" },
    { value: "до 10", label: "проектов одновременно" },
    { value: "5 млн ₽", label: "контролируемый бюджет проекта" },
    { value: "305 ч", label: "профпереподготовка в Яндексе" },
  ],
  skills: [
    "Agile",
    "Scrum",
    "Kanban",
    "Jira",
    "GitHub",
    "Miro",
    "Figma",
    "MS Project",
    "MoSCoW",
    "RICE",
    "BPMN",
    "SQL",
  ],
  education: {
    title: "Яндекс Практикум",
    program: "Расширенный курс менеджер проектов",
    qualification: "Менеджер по информационным технологиям",
    period: "17.07.2025 - 26.03.2026",
    hours: "305 часов",
  },
  github: {
    publicRepos: "https://github.com/nefrit333-cpu?tab=repositories",
    projectRepo: "https://github.com/Alekhina/pixel-runner",
    note:
      "Публичные репозитории вынесены отдельными ссылками, чтобы сразу показать код, стек и учебно-практические проекты.",
    repos: [
      {
        name: "spine-flow",
        href: "https://github.com/nefrit333-cpu/spine-flow",
        description: "PWA с короткими практиками для подвижности и мягкой разминки на iPhone.",
      },
      {
        name: "pogoda-seychas",
        href: "https://github.com/nefrit333-cpu/pogoda-seychas",
        description: "Одностраничный Laravel-сайт погоды с геолокацией и Vercel-экспортом.",
      },
      {
        name: "my-first-site",
        href: "https://github.com/nefrit333-cpu/my-first-site",
        description: "Учебный сайт-портфолио frontend-разработчика на HTML, CSS и JavaScript.",
      },
    ],
  },
} as const;
