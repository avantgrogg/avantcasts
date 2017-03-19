const Koa = require('koa'); 
const routes = require('./routes/routes');
const Router = require('koa-better-router');
const send = require('koa-send');
const views = require('koa-views');
const cache = require('koa-cache-lite');

// use in-memory cache
cache.configure({
  '/performsearch/:searchterm': 3000
}, {
  debug: false
})
const router = Router().loadMethods();

const admin = require('firebase-admin');

const serviceAccount = require('../firebase.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://avantcasts.firebaseio.com/"
});

const app = new Koa();

router.get('/', async (ctx, next) => {
  ctx.state.homeData = routes.home();
  ctx.state = Object.assign({}, ctx.state, { title: 'home page'});
  await ctx.render('./templates/home.nunj')
  await next();
})

router.get('/api/search/:searchterm', async (ctx, next) => {
  console.log('searching...');
  ctx.body = await routes.search(ctx);
  await next();
})

router.get('/search', async (ctx, next) => {
  ctx.state = Object.assign({}, ctx.state, { title: 'Search Page'});
  await ctx.render('./templates/search.nunj');
})

router.get('/popular', async (ctx, next) => {
  ctx.body = await routes.popular();
  await next();
})

router.get('/mypodcasts', async (ctx, next) => {
  ctx.body = await routes.mypodcasts(ctx);
  await next();
})

router.get('/css/:file', async (ctx, next) => {
  const fileName = ctx.params.file;
  await send(ctx, `./public/css/${fileName}`);
})

router.get('/js/:file', async (ctx, next) => {
  const fileName = ctx.params.file;
  await send(ctx, `./public/js/${fileName}`);
})


app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`That took ${ms}`);
});

app.use(views(__dirname, { map: {nunj: 'nunjucks' }}))

app.use(async (ctx, next) => {
  ctx.state['db'] = admin.database();
  await next();
})

app.use(cache.middleware());
app.use(router.middleware());

app.listen(3000);
