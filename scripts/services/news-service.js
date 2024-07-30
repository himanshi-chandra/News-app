import { URL } from "../utils/config.js"
import { getNews } from "./api-client.js"
import News from "../models/news.js";
// Bring the data and store it in table

export const newsService = {
    async readNews(){
        const news = await getNews(URL);
        //news data is coming from backend and convert it into NEWS model
        console.log('News are', news.articles);
        const allNews = [];
        //Imperative way
        // for(let i=0;i<news.articles.length;i++){
        //     const currentNews = news.articles[i];
        //     const newsObject = new News(currentNews['title'],currentNews['description'],currentNews['URL'],currentNews['urlToImage']);
        //     allNews.push(newsObject);
        // }

        //Declarative way
        return news.articles.map((currentNews) => new News(currentNews['title'],currentNews['description'],currentNews['url'],currentNews['urlToImage']));
        //return allNews; 
    },
    markRead(){

    },
    markReadLater(){

    }
}