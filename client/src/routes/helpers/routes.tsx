// import Home from '../../components/admin/home/Home'
// import Users from '../../components/admin/users/Users'
// import User from '../../components/admin/users/User'
// import Exercises from '../../components/admin/exercises/Exercises'
// import Exercise from '../../components/admin/exercises/Exercise'
// import Questions from '../../components/admin/questions/Questions'
// import HomeVisitor2 from '../../components/HomeVisitor/HomeVisitor2'
// import SingUp_Login from '../../components/login-singUp/Singup_Login'
// import News from '../../components/HomeRegister/News/News'
// import DecriptionEjer from '../../components/HomeRegister/desctipcionE/DecritionEje'
// import Ejercicios from '../../components/HomeRegister/Ejercicios'
// import Calculadora from '../../components/HomeRegister/Calculadora'
// import Favoritos from '../../components/HomeRegister/Favorito'
// import RutinasPersonales from '../../components/HomeRegister/RutinasPersonales'
// import ContactUs from '../../components/Contact/Contact'
// import AboutUs from '../../components/AboutUs/AboutUs'
// import Training from '../../components/HomeRegister/Rutins/Training'
// import UserLoginScreen from 'screens/auth/UserLoginScreen/UserLoginScreen'
import {
  UserLoginScreen,
  UserRegisterScreen,
  AboutUsScreen,
  CalculatorScreen,
  ContactUsScreen,
  ExerciseDetailScreen,
  ExercisesScreen,
  FavoritesExercisesScreen,
  HomeScreen,
  NewsScreen,
  RoutineScreen,
  TrainingModeScreen,
} from '../module_imports/public-auth-routes'
import {
  DashboardScreen,
  ExerciseInformationScreen,
  ExercisesListScreen,
  QuestionsAdminScreen,
  UserInformationcreen,
  UsersListScreen,
} from '../module_imports/admin-routes'

export const roles = {
  visitRole: 'visit',
  loggedRole: 'logged',
  adminRole: 'admin',
  superRole: 'superAdmin',
}

export const routes = [
  //admin-routes
  {
    path: '',
    title: 'Panel Administrador',
    component: <DashboardScreen />,
    layout: 'admin',
    role: [roles.adminRole],
  },
  {
    path: 'users',
    title: 'Lista de usuarios',
    component: <UsersListScreen />,
    layout: 'admin',
    role: [roles.adminRole],
  },
  {
    path: 'users/:id',
    title: 'Usuario',
    component: <UserInformationcreen />,
    layout: 'admin',
    role: [roles.adminRole],
  },
  {
    path: 'exercises',
    title: 'Lista de Ejercicios',
    component: <ExercisesListScreen />,
    layout: 'admin',
    role: [roles.adminRole],
  },
  {
    path: 'exercises/:id',
    title: 'Ejercicio',
    component: <ExerciseInformationScreen />,
    layout: 'admin',
    role: [roles.adminRole],
  },
  {
    path: 'questions',
    title: 'Preguntas',
    component: <QuestionsAdminScreen />,
    layout: 'admin',
    role: [roles.adminRole],
  },
  //public-routes
  {
    path: 'home',
    title: '',
    component: <HomeScreen />,
    layout: 'visit',
    role: [roles.visitRole, roles.loggedRole],
  },
  {
    path: 'exercises',
    title: 'Ejercicios',
    component: <ExercisesScreen />,
    layout: 'visit',
    role: [roles.visitRole, roles.loggedRole],
  },
  {
    path: 'exercises/:id',
    title: 'Detalle Ejercicio',
    component: <ExerciseDetailScreen />,
    layout: 'visit',
    role: [roles.visitRole, roles.loggedRole],
  },
  {
    path: 'calculator',
    title: 'Calculadora de IMC',
    component: <CalculatorScreen />,
    layout: 'visit',
    role: [roles.visitRole, roles.loggedRole],
  },
  {
    path: 'news',
    title: 'Noticias',
    component: <NewsScreen />,
    layout: 'visit',
    role: [roles.visitRole, roles.loggedRole],
  },
  {
    path: 'exercises/favorites',
    title: 'Ejercicios Favoritos',
    component: <FavoritesExercisesScreen />,
    layout: 'visit',
    role: [roles.visitRole, roles.loggedRole],
  },
  {
    path: 'routine',
    title: 'Rutina Personalizada',
    component: <RoutineScreen />,
    layout: 'visit',
    role: [roles.visitRole, roles.loggedRole],
  },
  {
    path: 'routine/training',
    title: 'Modo Entrenamiento',
    component: <TrainingModeScreen />,
    layout: 'visit',
    role: [roles.visitRole, roles.loggedRole],
  },
  {
    path: 'about-us',
    title: 'Sobre Nosotros',
    component: <AboutUsScreen />,
    layout: 'visit',
    role: [roles.visitRole, roles.loggedRole],
  },
  {
    path: 'contact-us',
    title: 'Contáctanos',
    component: <ContactUsScreen />,
    layout: 'visit',
    role: [roles.visitRole, roles.loggedRole],
  },
  //auth-routes
  {
    path: 'login',
    title: 'Inicia Sesión',
    component: <UserLoginScreen />,
    layout: 'visit',
    role: [roles.visitRole],
  },
  {
    path: 'register',
    title: 'Registrate',
    component: <UserRegisterScreen />,
    layout: 'visit',
    role: [roles.visitRole],
  },
]
