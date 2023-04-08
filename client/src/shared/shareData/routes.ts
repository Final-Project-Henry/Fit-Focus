export const routes = [
  {
    path: '/exercises',
    title: 'Ejercicios',
    subMenus: true,
    menus: [
      { path: '/exercises', title: 'Ejercicios' },
      { path: '/routine', title: 'Rutinas' },
      { path: '/exercises/favorites', title: 'Favoritos' },
    ],
  },
  { path: '/contact-us', title: 'Opiniones', subMenus: false },
  { path: '/news', title: 'Noticias', subMenus: false },
]
