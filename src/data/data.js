import s1_bg_p from "../../public/images/semana1/img-principal.jpg";

export const links = [
  {
    name: "Contenido",
    submenu: true,
    sublinks: [
      {
        Head: "Vista General",
        sublink: [{ name: "Contenido", link: "/#content" }],
      },
      {
        Head: "1° Consolidado",
        sublink: [
          { name: "Semana 1", link: "/semana?id=1#inits" },
          { name: "Semana 2", link: "/semana?id=2#inits" },
          { name: "Semana 3", link: "/semana?id=3#inits" },
          { name: "Semana 4", link: "/semana?id=4#inits" },
          { name: "Semana 5", link: "/semana?id=5#inits" },
          { name: "Semana 6", link: "/semana?id=6#inits" },
          { name: "Semana 7", link: "/semana?id=7#inits" },
          { name: "Semana 8", link: "/semana?id=8#inits" },
        ],
      },
      {
        Head: "2° Consolidado",
        sublink: [
          { name: "Semana 9", link: "/semana?id=9#inits" },
          { name: "Semana 10", link: "/semana?id=10#inits" },
          { name: "Semana 11", link: "/semana?id=11#inits" },
          { name: "Semana 12", link: "/semana?id=12#inits" },
          { name: "Semana 13", link: "/semana?id=13#inits" },
          { name: "Semana 14", link: "/semana?id=14#inits" },
          { name: "Semana 15", link: "/semana?id=15#inits" },
          { name: "Semana 16", link: "/semana?id=16#inits" },
        ],
      },
    ],
  },
];

export const data = [
  {
    number: "01",
    theme: "Tecnologías de Desarrollo de Software",
    description:
      "Se brindó una detallada explicación sobre las tecnologías de desarrollo software",
    img_principal: s1_bg_p,
    labels: [{ name: "Teoría", color: "emerald" }],
    content:
      'Durante la primera semana del curso "Desarrollo de aplicaciones web", se brindó una detallada explicación sobre las tecnologías de desarrollo software que se utilizarán a lo largo del semestre.\nEsta introducción fue crucial para sentar las bases y proporcionar a los estudiantes una comprensión sólida de las herramientas y tecnologías clave en el ámbito del desarrollo web. La transformación en el tratamiento de la información y la evolución digital de los procesos empresariales ha generado tecnologías para desarrollar software, orientados a satisfacer las exigencias de los mercados.\nActualmente tenemos dos tecnologías de desarrollo de software.\n-	Tecnología web\n-	Tecnología de software nativo.\n\tTecnología Web\nLa tecnología web se refiere al conjunto de herramientas, lenguajes y tecnologías utilizadas para desarrollar aplicaciones y sitios web accesibles a través de navegadores web. Algunos de los elementos clave de la tecnología web incluyen:\n- HTML\n- CSS\n- JavaScript\n- Frameworks y bibliotecas\n- Protocolos y Tecnologías de Comunicación\n\tTecnología de software nativo\nLa tecnología de software nativo se refiere al desarrollo de aplicaciones específicas para una plataforma o sistema operativo en particular. Estas aplicaciones se crean utilizando los lenguajes y herramientas recomendados por la plataforma objetivo. Algunas características de la tecnología de software nativo incluyen:\n-Lenguajes específicos de la plataforma\n-Kits de desarrollo de software (SDK)\n-Acceso completo a las API del sistema operativo\n-Alto rendimiento y optimización',
    definition: [
      {
        name: "HTML (HyperText Markup Language)",
        notion:
          "Es el lenguaje de marcado estándar utilizado para estructurar y presentar el contenido de las páginas web. Con HTML, se definen los elementos y la estructura básica de una página.",
      },
      {
        name: "CSS (Cascading Style Sheets)",
        notion:
          "Es utilizado para definir el estilo y la apariencia visual de las páginas web. Con CSS, se pueden aplicar estilos como colores, fuentes, márgenes y diseños a los elementos HTML.",
      },
      {
        name: "JavaScript",
        notion:
          "Es utilizado para definir el estilo y la apariencia visual de las páginas web. Con CSS, se pueden aplicar estilos como colores, fuentes, márgenes y diseños a los elementos HTML.",
      },
      {
        name: "Frameworks y bibliotecas",
        notion:
          "Existen numerosos frameworks y bibliotecas que simplifican el desarrollo web, proporcionando conjuntos de herramientas predefinidas y funcionalidades comunes. Algunos ejemplos populares son React, Angular y Vue.js.",
      },
      {
        name: "Protocolos y tecnologías de comunicación",
        notion:
          "Para que las aplicaciones web puedan comunicarse con los servidores y otros recursos, se utilizan protocolos como HTTP (Hypertext Transfer Protocol) y WebSocket. También se emplean tecnologías como AJAX (Asynchronous JavaScript and XML) para realizar solicitudes asíncronas y actualizar contenido sin tener que recargar toda la página.",
      },
    ],
    url: "/semana?id=1#inits",
  },
  {
    number: "02",
    theme: "Tema 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    img_principal: s1_bg_p,
    labels: [
      { name: "HTML", color: "orange" },
      { name: "CSS", color: "blue" },
      { name: "JS", color: "amber" },
    ],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    definition: [
      { name: "definition 1", notion: "asdasdasd" },
      { name: "definition 2", notion: "asdasdasd" },
      { name: "definition 3", notion: "asdasdasd" },
      { name: "definition 4", notion: "asdasdasd" },
      { name: "definition 5", notion: "asdasdasd" },
    ],
    url: "/semana?id=2#inits",
  },
  {
    number: "03",
    theme: "Tema 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    img_principal: s1_bg_p,
    labels: [
      { name: "HTML", color: "orange" },
      { name: "CSS", color: "blue" },
      { name: "JS", color: "amber" },
    ],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    definition: [
      { name: "definition 1", notion: "asdasdasd" },
      { name: "definition 2", notion: "asdasdasd" },
      { name: "definition 3", notion: "asdasdasd" },
      { name: "definition 4", notion: "asdasdasd" },
      { name: "definition 5", notion: "asdasdasd" },
    ],
    url: "/semana?id=3#inits",
  },
  {
    number: "04",
    theme: "Tema 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    img_principal: s1_bg_p,
    labels: [
      { name: "HTML", color: "orange" },
      { name: "CSS", color: "blue" },
      { name: "JS", color: "amber" },
    ],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    definition: [
      { name: "definition 1", notion: "asdasdasd" },
      { name: "definition 2", notion: "asdasdasd" },
      { name: "definition 3", notion: "asdasdasd" },
      { name: "definition 4", notion: "asdasdasd" },
      { name: "definition 5", notion: "asdasdasd" },
    ],
    url: "/semana?id=4#inits",
  },
  {
    number: "05",
    theme: "Tema 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    img_principal: s1_bg_p,
    labels: [
      { name: "HTML", color: "orange" },
      { name: "CSS", color: "blue" },
      { name: "JS", color: "amber" },
    ],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    definition: [
      { name: "definition 1", notion: "asdasdasd" },
      { name: "definition 2", notion: "asdasdasd" },
      { name: "definition 3", notion: "asdasdasd" },
      { name: "definition 4", notion: "asdasdasd" },
      { name: "definition 5", notion: "asdasdasd" },
    ],
    url: "/semana?id=5#inits",
  },
  {
    number: "06",
    theme: "Tema 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    img_principal: s1_bg_p,
    labels: [
      { name: "HTML", color: "orange" },
      { name: "CSS", color: "blue" },
      { name: "JS", color: "amber" },
    ],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    definition: [
      { name: "definition 1", notion: "asdasdasd" },
      { name: "definition 2", notion: "asdasdasd" },
      { name: "definition 3", notion: "asdasdasd" },
      { name: "definition 4", notion: "asdasdasd" },
      { name: "definition 5", notion: "asdasdasd" },
    ],
    url: "/semana?id=6#inits",
  },
  {
    number: "07",
    theme: "Tema 7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    img_principal: s1_bg_p,
    labels: [
      { name: "HTML", color: "orange" },
      { name: "CSS", color: "blue" },
      { name: "JS", color: "amber" },
    ],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    definition: [
      { name: "definition 1", notion: "asdasdasd" },
      { name: "definition 2", notion: "asdasdasd" },
      { name: "definition 3", notion: "asdasdasd" },
      { name: "definition 4", notion: "asdasdasd" },
      { name: "definition 5", notion: "asdasdasd" },
    ],
    url: "/semana?id=7#inits",
  },
  {
    number: "08",
    theme: "Tema 8",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    img_principal: s1_bg_p,
    labels: [
      { name: "HTML", color: "orange" },
      { name: "CSS", color: "blue" },
      { name: "JS", color: "amber" },
    ],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    definition: [
      { name: "definition 1", notion: "asdasdasd" },
      { name: "definition 2", notion: "asdasdasd" },
      { name: "definition 3", notion: "asdasdasd" },
      { name: "definition 4", notion: "asdasdasd" },
      { name: "definition 5", notion: "asdasdasd" },
    ],
    url: "/semana?id=8#inits",
  },
  {
    number: "09",
    theme: "Tema 9",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    img_principal: s1_bg_p,
    labels: [
      { name: "HTML", color: "orange" },
      { name: "CSS", color: "blue" },
      { name: "JS", color: "amber" },
    ],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    definition: [
      { name: "definition 1", notion: "asdasdasd" },
      { name: "definition 2", notion: "asdasdasd" },
      { name: "definition 3", notion: "asdasdasd" },
      { name: "definition 4", notion: "asdasdasd" },
      { name: "definition 5", notion: "asdasdasd" },
    ],
    url: "/semana?id=9#inits",
  },
  {
    number: "10",
    theme: "Tema 10",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    img_principal: s1_bg_p,
    labels: [
      { name: "HTML", color: "orange" },
      { name: "CSS", color: "blue" },
      { name: "JS", color: "amber" },
    ],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    definition: [
      { name: "definition 1", notion: "asdasdasd" },
      { name: "definition 2", notion: "asdasdasd" },
      { name: "definition 3", notion: "asdasdasd" },
      { name: "definition 4", notion: "asdasdasd" },
      { name: "definition 5", notion: "asdasdasd" },
    ],
    url: "/semana?id=10#inits",
  },
  {
    number: "11",
    theme: "Tema 11",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    img_principal: s1_bg_p,
    labels: [
      { name: "HTML", color: "orange" },
      { name: "CSS", color: "blue" },
      { name: "JS", color: "amber" },
    ],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    definition: [
      { name: "definition 1", notion: "asdasdasd" },
      { name: "definition 2", notion: "asdasdasd" },
      { name: "definition 3", notion: "asdasdasd" },
      { name: "definition 4", notion: "asdasdasd" },
      { name: "definition 5", notion: "asdasdasd" },
    ],
    url: "/semana?id=11#inits",
  },
  {
    number: "12",
    theme: "Tema 12",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    img_principal: s1_bg_p,
    labels: [
      { name: "HTML", color: "orange" },
      { name: "CSS", color: "blue" },
      { name: "JS", color: "amber" },
    ],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    definition: [
      { name: "definition 1", notion: "asdasdasd" },
      { name: "definition 2", notion: "asdasdasd" },
      { name: "definition 3", notion: "asdasdasd" },
      { name: "definition 4", notion: "asdasdasd" },
      { name: "definition 5", notion: "asdasdasd" },
    ],
    url: "/semana?id=12#inits",
  },
  {
    number: "13",
    theme: "Tema 13",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    img_principal: s1_bg_p,
    labels: [
      { name: "HTML", color: "orange" },
      { name: "CSS", color: "blue" },
      { name: "JS", color: "amber" },
    ],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    definition: [
      { name: "definition 1", notion: "asdasdasd" },
      { name: "definition 2", notion: "asdasdasd" },
      { name: "definition 3", notion: "asdasdasd" },
      { name: "definition 4", notion: "asdasdasd" },
      { name: "definition 5", notion: "asdasdasd" },
    ],
    url: "/semana?id=13#inits",
  },
  {
    number: "14",
    theme: "Tema 14",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    img_principal: s1_bg_p,
    labels: [
      { name: "HTML", color: "orange" },
      { name: "CSS", color: "blue" },
      { name: "JS", color: "amber" },
    ],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    definition: [
      { name: "definition 1", notion: "asdasdasd" },
      { name: "definition 2", notion: "asdasdasd" },
      { name: "definition 3", notion: "asdasdasd" },
      { name: "definition 4", notion: "asdasdasd" },
      { name: "definition 5", notion: "asdasdasd" },
    ],
    url: "/semana?id=14#inits",
  },
  {
    number: "15",
    theme: "Tema 15",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    img_principal: s1_bg_p,
    labels: [
      { name: "HTML", color: "orange" },
      { name: "CSS", color: "blue" },
      { name: "JS", color: "amber" },
    ],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    definition: [
      { name: "definition 1", notion: "asdasdasd" },
      { name: "definition 2", notion: "asdasdasd" },
      { name: "definition 3", notion: "asdasdasd" },
      { name: "definition 4", notion: "asdasdasd" },
      { name: "definition 5", notion: "asdasdasd" },
    ],
    url: "/semana?id=15#inits",
  },
  {
    number: "16",
    theme: "Tema 16",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    img_principal: s1_bg_p,
    labels: [
      { name: "HTML", color: "orange" },
      { name: "CSS", color: "blue" },
      { name: "JS", color: "amber" },
    ],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremeaque quidem esse? Incidunt, odit beatae?",
    definition: [
      { name: "definition 1", notion: "asdasdasd" },
      { name: "definition 2", notion: "asdasdasd" },
      { name: "definition 3", notion: "asdasdasd" },
      { name: "definition 4", notion: "asdasdasd" },
      { name: "definition 5", notion: "asdasdasd" },
    ],
    url: "/semana?id=16#inits",
  },
];
