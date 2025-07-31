import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send('Get all subs'));

subscriptionRouter.get('/:id', (req, res) => res.send('Get subs details'));

subscriptionRouter.post('/', (req, res) => res.send('Create subs'));

subscriptionRouter.put('/:id', (req, res) => res.send('Update subs details'));

subscriptionRouter.delete('/:id', (req, res) => res.send('Delete subs by ID'));

subscriptionRouter.post('/user/:id', (req, res) => res.send('Get all user subs'));

subscriptionRouter.put('/:id/cancel', (req, res) => res.send('Cancel subs'));

subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send('Get upcoming renewals'));



export default subscriptionRouter;
