import Home from '../../components/admin/home/Home'
import Users from '../../components/admin/users/Users'
import User from '../../components/admin/users/User'
import Exercises from '../../components/admin/exercises/Exercises'
import ExerciseForm from '../../components/admin/exercises/ExerciseForm'
import Exercise from '../../components/admin/exercises/Exercise'
import Comments from '../../components/admin/comments/Comments'
import Questions from '../../components/admin/questions/Questions'
import HomeVisitor2 from '../../components/HomeVisitor/HomeVisitor2'
import SingUp_Login from '../../components/login-singUp/Singup_Login'
import News from '../../components/HomeRegister/News/News'
import DecriptionEjer from '../../components/HomeRegister/desctipcionE/DecritionEje'
import Ejercicios from '../../components/HomeRegister/Ejercicios'
import Calculadora from '../../components/HomeRegister/Calculadora'
import Favoritos from '../../components/HomeRegister/Favorito'
import RutinasPersonales from '../../components/HomeRegister/RutinasPersonales'
import ContactUs from '../../components/Contact/Contact'
import AboutUs from '../../components/AboutUs/AboutUs'
import Training from '../../components/HomeRegister/Rutins/Training'

export const roles = {
  visitRole: 'visit',
  loggedRole: 'logged',
  adminRole: 'admin',
  superRole: 'superAdmin',
}

export const routes = [
  {
    path: '',
    title: 'Panel Administrador',
    component: <Home />,
    layout: 'admin',
    role: roles.adminRole,
  },
  {
    path: 'users',
    title: 'Lista de usuarios',
    component: <Users />,
    layout: 'admin',
    role: roles.adminRole,
  },
  {
    path: 'users/:id',
    title: 'Usuario',
    component: <User />,
    layout: 'admin',
    role: roles.adminRole,
  },
  {
    path: 'exercises',
    title: 'Lista de Ejercicios',
    component: <Exercises />,
    layout: 'admin',
    role: roles.adminRole,
  },
  {
    path: 'exercises/new',
    title: 'Agregar ejercicio',
    component: <ExerciseForm />,
    layout: 'admin',
    role: roles.adminRole,
  },
  {
    path: 'exercises/:id',
    title: 'Ejercicio',
    component: <Exercise />,
    layout: 'admin',
    role: roles.adminRole,
  },
  {
    path: 'comments',
    title: 'Comentarios',
    component: <Comments />,
    layout: 'admin',
    role: roles.adminRole,
  },
  {
    path: 'questions',
    title: 'Preguntas',
    component: <Questions />,
    layout: 'admin',
    role: roles.adminRole,
  },
  {
    path: 'home',
    title: '',
    component: <HomeVisitor2 />,
    layout: 'visit',
    role: roles.visitRole,
  },
  {
    path: 'exercises',
    title: 'Ejercicios',
    component: <Ejercicios />,
    layout: 'visit',
    role: roles.visitRole,
  },
  {
    path: 'exercises/:id',
    title: 'Detalle Ejercicio',
    component: <DecriptionEjer />,
    layout: 'visit',
    role: roles.visitRole,
  },
  {
    path: 'calculator',
    title: 'Calculadora de IMC',
    component: <Calculadora />,
    layout: 'visit',
    role: roles.visitRole,
  },
  {
    path: 'news',
    title: 'Noticias',
    component: <News />,
    layout: 'visit',
    role: roles.visitRole,
  },
  {
    path: 'exercises/favorites',
    title: 'Ejercicios Favoritos',
    component: <Favoritos />,
    layout: 'visit',
    role: roles.visitRole,
  },
  {
    path: 'routine',
    title: 'Rutina Personalizada',
    component: <RutinasPersonales />,
    layout: 'visit',
    role: roles.visitRole,
  },
  {
    path: 'routine/training',
    title: 'Modo Entrenamiento',
    component: <Training />,
    layout: 'visit',
    role: roles.visitRole,
  },
  {
    path: 'about-us',
    title: 'Sobre Nosotros',
    component: <AboutUs />,
    layout: 'visit',
    role: roles.visitRole,
  },
  {
    path: 'contact-us',
    title: 'Contáctanos',
    component: <ContactUs />,
    layout: 'visit',
    role: roles.visitRole,
  },
  {
    path: 'login',
    title: 'Inicia Sesión',
    component: <SingUp_Login />,
    layout: 'visit',
    role: roles.visitRole,
  },
  {
    path: 'register',
    title: 'Registrate',
    component: <SingUp_Login />,
    layout: 'visit',
    role: roles.visitRole,
  },
]
