//import React from 'react';
//import  './App.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import HomeScreen from './components/HomeScreen';


const server = () => {
    
    const [ articles, setArticle]=useState(null);
   // const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
      const getArticle =async()=>{
      setLoading(true);
      setError(null);   
  try{
        const response =await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=f1ee06b0aa4745a5a73cc72c57d02532`)
        console.log(response)
        setArticle(response.data.articles)
      }catch(error){
        setError(error);
      }
      setLoading(false);
    }
      getArticle();
    },[])

    
  return (
    <div>
        {articles.map((article)=>{
        return(
            <HomeScreen 
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
        />
            )
        }
        )}
      </div>  
  )}
export default server;