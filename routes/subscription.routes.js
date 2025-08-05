import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getUserSubscription } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send('Get all subs'));

subscriptionRouter.get('/:id', (req, res) => res.send('Get subs details'));

subscriptionRouter.post('/',authorize, createSubscription );

subscriptionRouter.put('/:id', (req, res) => res.send('Update subs details'));

subscriptionRouter.delete('/:id', (req, res) => res.send('Delete subs by ID'));

subscriptionRouter.get('/user/:id', authorize, getUserSubscription);

subscriptionRouter.put('/:id/cancel', (req, res) => res.send('Cancel subs'));

subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send('Get upcoming renewals'));



export default subscriptionRouter;
