import express from 'express';
import cors from 'cors';
import { loadEnv } from './config/env';
import authRoutes from './modules/auth/auth.routes';
import authGoogleRoutes from './modules/auth/authGoogle.routes';
import {
  exercisesAuthRoutes,
  exercisesPublicRoutes,
} from './modules/exercises/exercises.routes';
import usersRoutes from './modules/users/users.routes';
import routinesRoutes from './modules/routines/routines.routes';
import paymentsRoutes from './modules/payments/payments.routes';
import { commentsAuthRoutes } from './modules/comments/comments.routes';
import { adminRouter, superAdminRouter } from './modules/admin/admin.routes';
import {
  authenticate,
  requireAdmin,
  requireSuperAdmin,
} from './shared/middleware/authenticate';
import { errorHandler } from './shared/middleware/errorHandler';

loadEnv();

export function createApp() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors({ origin: '*' }));
  app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

  // Public routes (no JWT)
  app.use('/', authRoutes);
  app.use('/', exercisesPublicRoutes);
  app.use('/authGoogle', authGoogleRoutes);

  // Authenticated routes
  app.use(authenticate);
  app.use('/auth', usersRoutes);
  app.use('/auth', routinesRoutes);
  app.use('/auth', paymentsRoutes);
  app.use('/auth', exercisesAuthRoutes);
  app.use('/auth', commentsAuthRoutes);

  // Admin routes
  app.use(requireAdmin);
  app.use('/admin', adminRouter);

  // SuperAdmin routes
  app.use(requireSuperAdmin);
  app.use('/superAdmin', superAdminRouter);

  app.use(errorHandler);

  return app;
}

export default createApp;
