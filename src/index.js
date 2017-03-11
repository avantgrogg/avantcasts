import Koa from 'koa'; 
import * as routes from './routes/routes';
import Router from 'koa-better-router';
const router = Router().loadMethods();

import * as admin from 'firebase-admin';

import * as serviceAccount from '../firebase.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://avantcasts.firebaseio.com/"
});

const app = new Koa();

router.get('/', async (ctx, next) => {
  ctx.body = routes.home();
  await next();
})

router.get('/search', async (ctx, next) => {
  ctx.body = await routes.search(ctx);
  await next();
})

router.get('/popular', async (ctx, next) => {
  ctx.body = await routes.popular();
  await next();
})

router.get('/mypodcasts', async (ctx, next) => {
  ctx.body = await routes.mypodcasts(ctx);
  await next();
})



app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`That took ${ms}`);
});

app.use(async (ctx, next) => {
  ctx.state['db'] = admin.database();
  await next();
})

app.use(router.middleware())

app.listen(3000);
