import {URL} from '../utils/config.js';

export async function getNews(URL){
    try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log('Data is', data);
        return data;
    }catch(err){
        throw err;
    }
    // Make API call
    // const promise = fetch(URL);
    // console.log('Promise is', promise);
    // promise.then(function(response){
    //     const pr = response.json();
    //     pr.then(function(data){
    //         console.log('Data Rec', data);
    //     }).catch(function(err){
    //         console.log('Invalid json', err);
    //     })
    // }).catch(function(err){
    //     console.log('Error during fetch news', err);
    // })
}
//getNews(URL);