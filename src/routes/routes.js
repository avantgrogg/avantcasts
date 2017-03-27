const fetch = require('node-fetch');
const get = require('lodash/get');
const feedparser = require('feedparser-promised');

module.exports = {
    home: home,
    search: search,
    popular: popular,
    mypodcasts: mypodcasts,
    getFeed: getFeed
}

function home() {
    return `Welcome home`;
}

async function search(ctx) {
    const searchValue = ctx.params.searchterm;
    console.log(searchValue);
    const searchRef = ctx.state.db.ref('searches')
    const res = await fetch(`https://itunes.apple.com/search?media=podcast&entity=podcast&limit=10&term=${searchValue}`);
    const resJSON = await res.json();
    const orchestratedData= resJSON.results.map((result, idx) => {
        return {
            artistId: get(result, 'artistId', ''),
            collectionId: get(result, 'collectionId', ''),
            artistName: get(result, 'artistName', ''),
            collectionName: get(result, 'collectionName', ''),
            feedUrl: get(result, 'feedUrl', ''),
            artwork: get(result, 'artworkUrl600', '')
        }
    });
    //const newSearchRef = await searchRef.push().set({[searchValue]: orchestratedData});
    return orchestratedData;
}

async function getFeed(ctx) {
    const url = ctx.request.body.podcastUrl;
    const podcastEps = await feedparser.parse(url).then(items => Promise.resolve(items));
    return podcastEps;
}

async function popular() {
    const res = await fetch(`https://itunes.apple.com/us/rss/toppodcasts/limit=10/explicit=true/json`);
    const resJSON = await res.json();
    return resJSON;
}

async function mypodcasts(ctx) {
    const userRef = ctx.state.db.ref('users/doug');
    const userVal = await userRef.once('value', (data) => Promise.resolve(data.toJSON()));
    return userVal;
}