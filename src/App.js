import React, {useState, useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from "./Components/NewsCards/NewsCards";

const alanKey = '0851305676e060b1d5a37e6f3342dd232e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () =>{
    const [newsArticles,setNewsArticles] =useState([]);
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand : ({ command , articles }) => {
                if(command ==='newHeadlines'){
                    setNewsArticles(articles);
                }
            }
        })
    }, [])
    return (
        <div>
            <div>
            <h1>  AI news application</h1>
            </div>
            <NewsCards  articles ={newsArticles} />
        </div>
    );
}

export default App;