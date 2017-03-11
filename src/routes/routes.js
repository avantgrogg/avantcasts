import fetch from 'node-fetch';
export function home() {
    return `Welcome home`;
}

export async function search(ctx) {
    const searchValue = ctx.query['query'];
    const searchRef = ctx.state.db.ref('searches')
    const res = await fetch(`https://itunes.apple.com/search?media=podcast&term=${searchValue}`);
    const resJSON = await res.json();
    const newSearchRef = await searchRef.push().set({[searchValue]: resJSON});
    return resJSON;
}

export async function popular() {
    const res = await fetch(`https://itunes.apple.com/us/rss/toppodcasts/limit=10/explicit=true/json`);
    const resJSON = await res.json();
    return resJSON;
}

export async function mypodcasts(ctx) {
    const userRef = ctx.state.db.ref('users/doug');
    const userVal = await userRef.once('value', (data) => Promise.resolve(data.toJSON()));
    return userVal;
}