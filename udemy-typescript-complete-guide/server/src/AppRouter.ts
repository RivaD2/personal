import express from 'express';

// I only one single router inside app
// If I want to access Router, I import this router and use getInstance()
export class AppRouter {
  private static instance: express.Router;

  static getInstance(): express.Router {
    if (!AppRouter.instance) {
      AppRouter.instance = express.Router();
    }
    return AppRouter.instance;
  }
}