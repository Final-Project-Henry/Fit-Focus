import { Route } from 'react-router-dom';
import AdminRoute from '@/routes/AdminRoute';
import Dashboard from '@/screens/admin/Dashboard';
import Home from '@/screens/admin/home/Home';
import Users from '@/screens/admin/users/Users';
import User from '@/screens/admin/users/User';
import Exercises from '@/screens/admin/exercises/Exercises';
import ExerciseForm from '@/screens/admin/exercises/ExerciseForm';
import Exercise from '@/screens/admin/exercises/Exercise';
import Comments from '@/screens/admin/comments/Comments';
import Questions from '@/screens/admin/questions/Questions';

export const adminRoutes = (
  <Route element={<AdminRoute />}>
    <Route path="/admin" element={<Dashboard />}>
      <Route path="" element={<Home />} />
      <Route path="users" element={<Users />} />
      <Route path="users/:id" element={<User />} />
      <Route path="exercises" element={<Exercises />} />
      <Route path="exercises/add" element={<ExerciseForm />} />
      <Route path="exercises/:id" element={<Exercise />} />
      <Route path="comments" element={<Comments />} />
      <Route path="questions" element={<Questions />} />
    </Route>
  </Route>
);
