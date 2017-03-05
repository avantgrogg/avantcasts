import fetch from 'node-fetch';
export function home() {
    return `Welcome home`;
}

export function search() {
    return `This is a search page`;
}

export async function popular() {
    const res = await fetch(`https://itunes.apple.com/us/rss/toppodcasts/limit=10/explicit=true/json`);
    const resJSON = await res.json();
    return resJSON;
}

export function mypodcasts() {
    return `These are your podcast`;
}