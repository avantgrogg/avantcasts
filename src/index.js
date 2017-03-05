import Koa from 'koa'; 
import * as routes from './routes/routes';
import Router from 'koa-better-router';
const router = Router().loadMethods();

const app = new Koa();

router.get('/', async (ctx, next) => {
  ctx.body = routes.home();
  await next();
})

router.get('/search', async (ctx, next) => {
  ctx.body = routes.search();
  await next();
})

router.get('/popular', async (ctx, next) => {
  ctx.body = await routes.popular();
  await next();
})

router.get('/mypodcasts', async (ctx, next) => {
  ctx.body = routes.mypodcasts();
  await next();
})



app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`That took ${ms}`);
});

app.use(router.middleware())

app.listen(3000);
