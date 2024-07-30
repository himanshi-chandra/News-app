import { newsService } from "../services/news-service.js";

async function  prepareNews(){
    const allNews = await newsService.readNews();
    allNews.forEach(news => printNews(news));
    console.log('All news are', allNews);
}

function printNews(news){
    const newsId = document.querySelector('#news');
    // const colDiv = document.createElement('div');
    // colDiv.className = 'row border border-primary';
    const cardDiv = document.createElement('div');
    cardDiv.classList='card pt-6 mt-5';
    cardDiv.style.width='23rem';
    //cardDiv.style.height='250px';
    cardDiv.style.minHeight='250px';
    
    // colDiv.appendChild(cardDiv);
    const img = document.createElement('img');
    img.src = news.image;
    img.className = 'card-img-top';
    img.style.height='250px';
    cardDiv.appendChild(img);
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    cardDiv.appendChild(cardBody);
    const h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.innerText = news.title;
    cardBody.appendChild(h5);
    const pTag = document.createElement('p');
    pTag.innerText = news.desc;
    pTag.className = 'card-text';
    cardBody.appendChild(pTag);

    const aTag = document.createElement('a');
    aTag.href = news.url;
    aTag.className = 'btn btn-primary';
    aTag.innerText = 'Read more';
    cardBody.appendChild(aTag);

    newsId.appendChild(cardDiv);






}

prepareNews();