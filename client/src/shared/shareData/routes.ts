export const routes = [
  {
    path: '/exercises',
    title: 'Ejercicios',
    subMenus: true,
    menus: [
      { path: '/exercises', title: 'Ejercicios' },
      { path: '/routines', title: 'Rutinas' },
      { path: '/favorites', title: 'Favoritos' },
    ],
  },
  { path: '/comments', title: 'Opiniones', subMenus: false },
  { path: '/news', title: 'Noticias', subMenus: false },
]
